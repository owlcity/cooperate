/**
 * Created by zk on 2018/5/14
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar,Icon,Tabs } from 'antd-mobile';

const tabs = [
  { title: '公告' },
  { title: '通知' },
  { title: '活动' },
];

export default class Msg extends React.Component{
    
    render(){
        return(
            <div className="white-bg">
                <NavBar
                  mode="light"
                  icon={<Icon type="left" />}
                  onLeftClick={() => window.history.go(-1)}
                  
                >
                    <span className="fz16 ">消息</span>
                </NavBar>
                <div className="circle-tab border-top">
                    <Tabs tabs={tabs} initialPage={0} animated={false} useOnPan={false}
                      tabBarUnderlineStyle={{'display':'none'}}
                    >
                        <div className="padding-horizontal-sm bg-body">
                            <div className="msg-list">
                                <div className="lightgrey-color tac fz12 padding-sm">2018-04-14 10:50</div>
                                <div className="white-bg padding-sm radius-5">
                                    <div className="fz16">
                                        <strong>维护】关于招商银行维护的通知</strong>
                                    </div>
                                    <div className="margin-top-sm line-clamp-3">
                                        现接到银行最新通知，招商银行由于业务调整，从2018年2月12日00:00开始绑卡支付、快捷支付、银行卡委托扣款暂停提供服务，恢复后将再次通0开始绑卡支付、快捷支付、银行卡委托扣款暂停提供服务，恢复后将再次通知
                                    </div>
                                    <div className="margin-top-sm">
                                        <Link to='/account/msg/detail' className="yellow-color">
                                            查看详情
                                          </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="msg-list">
                                <div className="lightgrey-color tac fz12 padding-sm">2018-04-14 10:50</div>
                                <div className="white-bg padding-sm radius-5">
                                    <div className="fz16">
                                        <strong>维护】关于招商银行维护的通知</strong>
                                    </div>
                                    <div className="margin-top-sm line-clamp-3">
                                        现接到银行最新通知，招商银行由于业务调整，从2018年2月12日00:00开始绑卡支付、快捷支付、银行卡委托扣款暂停提供服务，恢复后将再次通知......
                                    </div>
                                    <div className="margin-top-sm">
                                        <Link to='/account/msg/detail' className="yellow-color">
                                            查看详情
                                          </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="padding-horizontal-sm bg-body">
                            <div className="msg-list">
                                <div className="lightgrey-color tac fz12 padding-sm">2018-04-14 10:50</div>
                                <div className="white-bg padding-sm radius-5">
                                    <div className="fz16">
                                        <strong>维护】关于招商银行维护的通知</strong>
                                    </div>
                                    <div className="margin-top-sm line-clamp-3">
                                        现接到银行最新通知，招商银行由于业务调整，从2018年2月12日00:00开始绑卡支付、快捷支付、银行卡委托扣款暂停提供服务，恢复后将再次通0开始绑卡支付、快捷支付、银行卡委托扣款暂停提供服务，恢复后将再次通知
                                    </div>
                                </div>
                            </div>
                            <div className="msg-list">
                                <div className="lightgrey-color tac fz12 padding-sm">2018-04-14 10:50</div>
                                <div className="white-bg padding-sm radius-5">
                                    <div className="fz16">
                                        <strong>维护】关于招商银行维护的通知</strong>
                                    </div>
                                    <div className="margin-top-sm line-clamp-3">
                                        现接到银行最新通知，招商银行由于业务调整，从2018年2月12日00:00开始绑卡支付、快捷支付、银行卡委托扣款暂停提供服务，恢复后将再次通0开始绑卡支付、快捷支付、银行卡委托扣款暂停提供服务，恢复后将再次通知
                                    </div>
                                </div>
                            </div>
                          
                        </div>
                        <div className="padding-sm bg-body">
                            <div className="msg-list margin-bottom-sm">
                                <div className="white-bg padding-sm radius-5">
                                    <div className="fz16">
                                        <strong>维护】关于招商银行维护的通知</strong>
                                        <span className="lightgrey-color fz12 mt3 fr">2018-04-14</span>
                                    </div>
                                    <div className="margin-top-sm">
                                       <Link to="">
                                            <img alt="" className="full radius-3" src="http://img.jylc168.com/Upload/Common/2018-04-28/a7c45ae3d5f682e4a.jpg" />
                                       </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="msg-list margin-bottom-sm">
                                <div className="white-bg padding-sm radius-5">
                                    <div className="fz16">
                                        <strong>维护】关于招商银行维护的通知</strong>
                                        <span className="lightgrey-color fz12 fr mt3">2018-04-14</span>
                                    </div>
                                    <div className="margin-top-sm">
                                       <Link to="">
                                            <img alt="" className="full radius-3" src="http://img.jylc168.com/Upload/Common/2018-04-28/a7c45ae3d5f682e4a.jpg" />
                                       </Link>
                                    </div>
                                </div>
                            </div>
                          
                        </div>
                      </Tabs>
                </div>
            </div>
        )
    }
}