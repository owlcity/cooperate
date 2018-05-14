/**
 * Created by zk on 2018/5/14
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar,Icon,Flex } from 'antd-mobile';

export default class Tickets extends React.Component{
    render(){
        return(
            <div className="white-bg">
                <NavBar
                  mode="light"
                  icon={<Icon type="left" />}
                  onLeftClick={() => window.history.go(-1)}
                  rightContent={
                    <Link className="fz12"  to="/account/tickets/invalid" >
                        失效卡券
                    </Link>
                  }
                >
                    <span className="fz16">我的卡券</span>
                </NavBar>
                <div className="padding-sm bg-body">
                    <Flex className="ticket-list red-border padding white-bg margin-bottom-sm">
                        <div className="flex-left">
                            
                            <strong className="ticket-text fz18">¥100</strong>
                            <div className="lightgrey-color fz12 margin-top-xs">满1000元可用</div>
                        </div>
                        <Flex.Item>
                            <div>
                                <strong className="fz16">现金券标题</strong>
                            </div>
                            <div className="lightgrey-color fz12 margin-top-xs">有效期至2018-04-05 13:00</div>
                        </Flex.Item>
                        
                    </Flex>
                    <Flex className="ticket-list purple-border padding white-bg margin-bottom-sm">
                        <div className="flex-left">
                            
                            <strong className="ticket-text fz18">¥2</strong>
                            <div className="lightgrey-color fz12 margin-top-xs">使用条件</div>
                        </div>
                        <Flex.Item>
                            <div>
                                <strong className="fz16">提现券</strong>
                            </div>
                            <div className="lightgrey-color fz12 margin-top-xs">有效期至2018-04-05 13:00</div>
                        </Flex.Item>
                    </Flex>
                    <Flex className="ticket-list blue-border padding white-bg margin-bottom-sm">
                        <div className="flex-left">
                            
                            <strong className="ticket-text fz18">0.8%</strong>
                            <div className="lightgrey-color fz12 margin-top-xs">使用条件</div>
                        </div>
                        <Flex.Item>
                            <div>
                                <strong className="fz16">加息卡标题</strong>
                            </div>
                            <div className="lightgrey-color fz12 margin-top-xs">有效期至2018-04-05 13:00</div>
                        </Flex.Item>
                    </Flex>
                </div>
                
            </div>
        )
    }
}