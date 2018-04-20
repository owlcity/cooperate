/**
 * Created by zk on 2018/4/19
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Picker,List,NavBar,Icon,InputItem, Switch, Button } from 'antd-mobile';
import { createForm } from 'rc-form';


const Item = List.Item;
const district =  [
    {
      label: '先息后本',
      value: '1'
    },
    {
      label: '一次性还本付息',
      value: '2'
    },
    {
      label: '等额本息',
      value: '3'
    },
    {
      label: '一次性还本付息(定期)',
      value: '4(定期)'
    }
];
// 如果不是使用 List.Item 作为 children

 class Calculatorss extends React.Component{

    render(){
        const { getFieldProps } = this.props.form;
        return(
            <div className="white-bg">
                <NavBar
                  mode="light"
                  icon={<Icon type="left" />}
                  onLeftClick={() => window.history.go(-1)}
                  rightContent={
                    <Link className="btn-sm yellow-bg padding-horizontal-xs"  to="/calculator/relax" >
                            轻松版
                     </Link>
                  }
                >
                    <span className="fz16 ">计算器</span>
                </NavBar>
                <div>
                    <List className="calculate-input">
                        <InputItem
                            {...getFieldProps('money')}
                            type="number"
                            placeholder="输入出借金额"
                        >出借金额(元)</InputItem>
                        <InputItem
                            {...getFieldProps('time')}
                            type="number"
                            placeholder="输入借款期限"
                        >借款期限(月)</InputItem>
                        <InputItem
                            {...getFieldProps('rate')}
                            type="number"
                            placeholder="输入年化利率"
                        >年化利率(%)</InputItem>
                        
                        <Picker data={district} cols={1} {...getFieldProps('method')} >
                          <Item arrow="horizontal">还款方式</Item>
                        </Picker>
                        <Item
                          extra={
                                <Switch 
                                    {...getFieldProps('1', { initialValue: false, 
                              valuePropName: 'checked' })} 
                                onClick={(checked)=>{
                                    checked ? document.querySelector(".toggle-con").removeAttribute('hidden') : document.querySelector(".toggle-con").setAttribute('hidden',"1");
                                }}
                                />
                            }
                        >优惠方式</Item>
                        <div className="toggle-con" hidden>
                        <InputItem
                            {...getFieldProps('ticket')}
                            type="number"
                            placeholder="现金券"
                        >现金券(元)</InputItem>
                        
                        <InputItem
                            {...getFieldProps('card')}
                            type="number"
                            placeholder="加息卡"
                        >加息卡(%)</InputItem>
                        <InputItem
                            {...getFieldProps('bag')}
                            type="number"
                            placeholder="福袋"
                        >福袋(元)</InputItem>
                        </div>
                    </List>
                    <div className="padding-sm padding-bottom-xl">
                        <Button className="btn-lg yellow-bg">
                            按此方案购买
                        </Button>
                    </div>
                </div>

            </div>
        )
    }
}
// onClick={(checked) => { 
//                                     if(checked){
//                                         document.querySelector(".toggle-con").style.display = "block"
//                                     }else{
//                                         document.querySelector(".toggle-con").style.display = "none"
//                                     }
//                                    }}
const Calculator = createForm()(Calculatorss);
export default Calculator;