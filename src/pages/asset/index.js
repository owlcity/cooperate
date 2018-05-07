/**
 * Created by zk on 2018/4/11
 */
import React from 'react';
import { Link } from 'react-router-dom';
import Calendar from 'components/calendar';
import { WhiteSpace,List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;


export default class Asset extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          show: true, //红包弹出
        };
    }
    
    render(){
        return(
            <div className="white-bg">
                <div className="yellow-bg padding-vertical padding-bottom-xl tac">
                    <div className="white-color text-shadow">
                        本月待回款
                    </div>
                    <div className="white-color text-shadow fz24 padding-vertical">
                        29102.21
                    </div>
                    <div className="white-color text-shadow">
                        本月已回款 290.21元
                    </div>
                </div>

                <div className="calendar-wrap margin-sm white-bg">
                    <Calendar />
                </div>
                <WhiteSpace className="bg-body" size="sm" />
                <List className="list my-list fz14">
                    <Item multipleLine extra={
                        <div>
                        <Link to="/calculator/major" >
                            提现
                        </Link>
                        <span className="gray-color margin-horizontal-xs"> | </span>
                        <Link className="orange-color"  to="/calculator/relax" >
                            充值
                        </Link>
                        </div>
                    }>
                      <span className="gray-color fz12">可用余额</span>
                      <Brief className="bark-color">2018.88</Brief>
                    </Item>
                    
                    <Item arrow="horizontal">
                        <Link to="/profit" >
                            <img alt="" src={require("assets/images/icon/asset.png")} />
                            <span className="fz14">待收收益</span>
                        </Link>
                    </Item>
                    <Item arrow="horizontal"  extra={
                        <div className="bark-color">
                            102012.89 <span className="fz12 bark-color">元</span>
                        </div>
                    }>
                        <Link to="/total" >
                            <img alt="" src={require("assets/images/icon/asset.png")} />
                            <span className="fz14">总资产</span>
                        </Link>
                    </Item>
                    <Item arrow="horizontal">
                        <img alt="" src={require("assets/images/icon/calendar.png")} />
                        <span className="fz14">回款日历</span>
                    </Item>
                    <Item arrow="horizontal">
                        <Link to="/account/mylend" >
                            <img alt="" src={require("assets/images/icon/lend.png")} />
                            <span className="fz14">我的出借</span>
                        </Link>
                    </Item>
                    <Item arrow="horizontal">
                        <img alt="" src={require("assets/images/icon/bill.png")} />
                        <span className="fz14">我的账单</span>
                    </Item>
                </List>
                <WhiteSpace className="bg-body" size="lg" />
  
            </div>
        )
    }
}