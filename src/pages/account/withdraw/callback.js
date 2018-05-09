/**
 * Created by zk on 2018/05/09
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Icon,Steps } from 'antd-mobile';
const Step = Steps.Step;



export default class WithdrawBack extends React.Component{
    render(){
        return(
            <div className="success-bg padding-sm padding-bottom-xl">
                <div>
                    <Icon type="cross" color="#fff" size="md" onClick={()=>{window.history.go(-1)}} />
                </div>
                <div className="tac">
                    <img height="80" alt="" src={require("assets/images/account/withdraw.jpg")} />
                </div>
                <div className="white-bg padding-sm radius-2">
                    <div className="tac">
                        <span className="fz12">提现金额（元）</span> <br /><br />
                        <strong className="fz24 red-color">30000</strong>
                        <div className="margin-vertical fz12">
                            提现账户:中国工商银行储蓄卡(尾号0231)
                        </div>
                        <div className="margin-vertical-xl">
                        <Steps direction="horizontal">
                          <Step 
                            title={
                                <div className="fz12 margin-top">提现申请已提交<br/>
                                    02-08 24:00
                                </div>
                              } 
                                status="error"  
                                icon={
                                <Icon type="check-circle-o" size="md" color="#C86854" />
                              } />
                        <Step 
                            title={
                                <div className="fz12 margin-top lightgrey-color">等待到账预计:<br/>
                                     02-08 24:00
                                </div>
                              } 
                                status="wait"  
                                icon={
                                <Icon className="margin-left-0" type="check-circle-o" size="md" color="#999" />
                              } />
                        </Steps>


                        </div>
                        <div className="padding-horizontal">
                            <Link to="" className="btn-lg margin-top-sm red-bg" type="warning">返回首页</Link>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}