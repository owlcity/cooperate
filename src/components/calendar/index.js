/**
 * Created by zk on 2018/4/24
 */
import React from 'react';
import { Badge } from 'antd-mobile';
import './index.less'
const data = [
    {"date":"20180402","project":"喜羊","money":"218.91"},
    {"date":"20180421","project":"喜羊","money":"218.91"},
    {"date":"20180501","project":"喜羊","money":"218.91"},
    {"date":"20180508","project":"乐羊","money":"2218.91"},
    {"date":"20180524","project":"吉羊","money":"2018.91"},
    {"date":"20180527","project":"喜ss羊","money":"18.91"},
    {"date":"20180530","project":"喜zz羊","money":"218.91"}
]
var dataArr = [];
for(var i=0;i<data.length;i++){
    dataArr.push(data[i].date);
}
console.log(dataArr);


class CalendarHeader extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            year:this.props.year, //组件上的属性通过this.props.XXX方式获取
            month:this.props.month//组件上的属性通过this.props.XXX方式获取
        };
        // React.createClass 是es5的写法默认是绑定了bind方法，而es6中 新增加了class，绑定的方法需要绑定this，如果是箭头函数就不需要绑定this，用箭头的方式
        this.handleLeftClick = this.handleLeftClick.bind(this);
        this.handleRightClick = this.handleRightClick.bind(this);
    }

    handleLeftClick(){
        var newMonth = parseInt(this.state.month,10) - 1;
        var year = this.state.year;
        if(newMonth < 1){
            year --;
            newMonth = 12;
        }
        //改变组件状态值，通过this.setState()，这里是更新年月状态值
        this.setState({
            month : newMonth,
            year: this.state.year
        })
        this.props.updateFilter(year,newMonth); // 执行父组件回调函数，改变父组件状态值

    }
    handleRightClick(){
        var newMonth = parseInt(this.state.month,10) + 1;
        var year = this.state.year;
        if( newMonth > 12 ){
            year ++;
            newMonth = 1;
        }
             //改变组件状态值，通过this.setState()，这里是更新年月状态值
        this.setState({
            month : newMonth,
            year: this.state.year
        })
        this.props.updateFilter(year,newMonth);// 执行父组件回调函数，改变父组件状态值

    }
    render(){
        return(
            <div className="headerborder">
                <span>{this.state.month}月{this.state.year}年</span>
                <p className="triangle-left" onClick={this.handleLeftClick}> </p>
                <p className="triangle-right" onClick={this.handleRightClick}> </p>
            </div>
        )
    }
}
class CalendarBody extends React.Component{
    getCurYear(){
        return this.props.year;
    }
    getCurMonth(){
        return this.props.month;
    }
    getCurDay(){
        return this.props.day;
    }
    getMonthDays(){
       //根据月份获取当前天数
        var year = this.getCurYear(),
            month = this.getCurMonth();
        var temp = new Date(year,month,0); 
        return temp.getDate(); 
    }
    getFirstDayWeek(){
        //获取当月第一天是星期几
        var year = this.getCurYear(),
            month = this.getCurMonth();   
        var dt = new Date(year+'/'+month+'/1');
        var Weekdays = dt.getDay();
        return Weekdays;    
    }
    componentDidMount(){
        // data[j].date
        // for(var j=0;j<data.length;j++){
        //     document.getElementById("#20180401").style.transform = "translate3d(0px, -68px, 0px)"
        // }

    }
    render(){
        var arry1 = [],arry2 = [],arryDate=[];
        var getDays = this.getMonthDays(),
            FirstDayWeek = this.getFirstDayWeek(),
            curday = this.props.day ;
            for(let i = 0 ;i < FirstDayWeek; i++ ){
                arry1[i] = i;
            }
            for(let i = 0 ;i < getDays; i++ ){
                arry2[i] = (i+1);
                arryDate[i] = this.getCurYear() + ('0'+this.getCurMonth()).slice(-2)+('0'+(i+1)).slice(-2);
            }
            console.log(arryDate);
        var node1 = arry1.map(function(item,i){
            return <li key={i}></li> // 这里不能加引号，因为要返回HTML标签，而不是html字符串，
                            //这是JSX语法 HTML 语言直接写在 JavaScript 语言之中，不加任何引号。
        })

        // 获取当前年月
        // console.log(arry2);
        var node2 = arry2.map(function(item,i){
            if(curday === item){
                return (
                    <li key={i}><span className="dayStyle curToday" id={arryDate[i]}>{item}</span></li>
                )
            }
            else{
                    return(
                    <li key={i}>
                        <span className="dayStyle" id={arryDate[i]}>
                            {item}
                        </span>
                    </li>
                    )
                
            }

        })
        
        return(
            <div>
                <div className="weekday">
                    <ul className="weekday-ul ul-box clearfix">        
                        <li>SUN</li>
                        <li>MON</li>
                        <li>TUE</li>
                        <li>WED</li>
                        <li>THU</li>
                        <li>FRI</li>
                        <li>SAT</li>
                    </ul>
                </div>
                <div className="CalendarDay clearfix" ref="CalendarDay">
                    <ul className="ul-box clearfix">{node1}{node2}</ul>
                </div>

            </div>
        )
    }
}
export default class Calendar extends React.Component{
    formatDate(date,fmt, flag) {
        /**
         * 对Date的扩展，将 Date 转化为指定格式的String
         * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q) 可以用 1-2 个占位符
         * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
         * eg:
         * Utils.formatDate(new Date(),'yyyy-MM-dd') ==> 2018-03-02
         * Utils.formatDate(new Date(),'yyyy-MM-dd hh:mm') ==> 2018-03-02 05:04
         * Utils.formatDate(new Date(),'yyyy-MM-dd HH:mm') ==> 2018-03-02 17:04
         * Utils.formatDate(new Date(),'yyyy-MM-dd hh:mm:ss.S') ==> 2018-07-02 08:09:04.423
         * Utils.formatDate(new Date(),'yyyy-MM-dd E HH:mm:ss') ==> 2018-03-10 二 20:09:04
         * Utils.formatDate(new Date(),'yyyy-MM-dd EE hh:mm:ss') ==> 2018-03-10 周二 08:09:04
         * Utils.formatDate(new Date(),'yyyy-MM-dd EEE hh:mm:ss') ==> 2018-03-10 星期二 08:09:04
         * Utils.formatDate(new Date(),'yyyy-M-d h:m:s.S') ==> 2018-7-2 8:9:4.18
         */
        if(!date) return;
        var o = {
            "M+" : date.getMonth()+1, //月份
            "d+" : date.getDate(), //日
            "h+" : flag ? date.getHours() : (date.getHours()%12 === 0 ? 12 : date.getHours()%12), //小时
            "H+" : date.getHours(), //小时
            "m+" : date.getMinutes(), //分
            "s+" : date.getSeconds(), //秒
            "q+" : Math.floor((date.getMonth()+3)/3), //季度
            "S" : date.getMilliseconds() //毫秒
        };
        var week = {
            "0" : "\u65e5",
            "1" : "\u4e00",
            "2" : "\u4e8c",
            "3" : "\u4e09",
            "4" : "\u56db",
            "5" : "\u4e94",
            "6" : "\u516d"
        };

        if(/(y+)/.test(fmt)){
            fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
        }

        if(/(E+)/.test(fmt)){
            fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "\u661f\u671f" : "\u5468") : "")+week[date.getDay()+""]);
        }
        for(var k in o){
            if(new RegExp("("+ k +")").test(fmt)){
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length===1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
            }
        }
        return fmt;
    }
    constructor(props){
        super(props);
        var newDate =  new Date();
        this.state = {
            year:this.formatDate(newDate,'yyyy'),
            month:parseInt(this.formatDate(newDate,'MM'),10),
            day:parseInt(this.formatDate(newDate,'dd'),10) 
        };
        this.handleFilterUpdate = this.handleFilterUpdate.bind(this);
    }
    handleFilterUpdate(filterYear,filterMonth) {
        this.setState({
            year: filterYear,
            month: filterMonth
        });
    }
    
    render(){
        return(
            <div className="calendarBorder"  >
                <CalendarHeader 
                    year = {this.state.year}
                    month = {this.state.month}
                    updateFilter={this.handleFilterUpdate} />
                <CalendarBody 
                    year = {this.state.year}
                    month = {this.state.month}
                    day = {this.state.day} />
                <div className="tac fz12 gray-color">
                        <span className="orange-color">〇 </span>已还款
                        <span className="orange-color margin-left">● </span>待还款
                    </div>
                    <div className="border-top padding-sm margin-top tac">
                        下一回款
                    </div>
                    <div className="calender-info radius-circle">
                        <Badge text="8/26" style={{ height:'32px',marginRight:'10px',fontSize:'16px', padding: '7px 13px', backgroundColor: '#FF7800', borderRadius: 100, }} />
                        <strong>喜羊贸易融租48期</strong>
                        <span className="orange-color fr fz16">81.75元</span>

                 </div>
            </div>

        )
    }
}