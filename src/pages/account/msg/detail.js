/**
 * Created by zk on 2018/5/14
 */
import React from 'react';
import { NavBar,Icon } from 'antd-mobile';

export default class Msg extends React.Component{
    
    render(){
        return(
            <div className="white-bg">
                <NavBar
                  mode="light"
                  icon={<Icon type="left" />}
                  onLeftClick={() => window.history.go(-1)}
                >
                    <span className="fz16 ">公告详情</span>
                </NavBar>
                <div className="padding-horizontal white-bg">
                    <div className="fz18 padding-top">
                        <strong>维护】关于招商银行维护的通知</strong>
                    </div> 
                    <div className="fz12 lightgrey-color margin-top-sm">
                        发布人：管理员 发布时间：2018-02-11 11:39
                    </div> 
                    <div className="padding-top-sm padding-bottom-xl">
                        <pre>
                        现接到银行最新通知，招商银行由于业务调整，从2018年2月12日00:00开始绑卡支付、快捷支付、银行卡委托扣款暂停提供服务，恢复后将再次通知各商户。暂停期间，充值请使用网银、银联在线支付等支付方式。

                        感谢您对囧羊理财的信任与支持！给您造成的不便，敬请谅解！

                        囧羊理财运营团队

                        2018年2月11日
                        </pre>
                    </div> 

                </div>
            </div>
        )
    }
}