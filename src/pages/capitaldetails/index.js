/**
 * Created by zk on 2018/4/19
 */
import React from 'react';
import { NavBar,Icon,Tabs,List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;

const tabs = [
  { title: '全部' },
  { title: '收入' },
  { title: '支出' },
];

export default class Capitaldetails extends React.Component{
    
    render(){
        return(
            <div className="white-bg">
                <NavBar
                  mode="light"
                  icon={<Icon type="left" />}
                  onLeftClick={() => window.history.go(-1)}
                  
                >
                    <span className="fz16 ">资金明细</span>
                </NavBar>
                <div className="circle-tab border-top">
                    <Tabs tabs={tabs} initialPage={0} animated={false} useOnPan={false}
                      tabBarUnderlineStyle={{'display':'none'}}
                    >
                        <div>
                          <List className="list my-list fz14 full" renderHeader={() => '2月'}>
                              <Item
                                thumb={require("assets/images/icon/down.png")}
                                multipleLine
                                extra={
                                  <div>
                                    <span className="red-color">
                                        +80
                                    </span>
                                  </div>
                              }
                              >
                                <span className="fz14">回款售后回款223</span>
                                <Brief style={{fontSize:'13px'}}>02-23 10:20</Brief>
                              </Item>
                              <Item
                                thumb={require("assets/images/icon/minus.png")}
                                multipleLine
                                extra={
                                  <div>
                                    <span className="dark-color">
                                        -9980
                                    </span>
                                  </div>
                              }
                              >
                                <span className="fz14">提现</span>
                                <Brief style={{fontSize:'13px'}}>02-23 10:20</Brief>
                              </Item>
                              <Item
                                thumb={require("assets/images/icon/add.png")}
                                multipleLine
                                extra={
                                  <div>
                                    <span className="red-color">
                                        +9980
                                    </span>
                                  </div>
                              }
                              >
                                <span className="fz14">充值</span>
                                <Brief style={{fontSize:'13px'}}>02-23 10:20</Brief>
                              </Item>
                              <Item
                                thumb={require("assets/images/icon/up.png")}
                                multipleLine
                                extra={
                                  <div>
                                    <span className="dark-color">
                                        -8080
                                    </span>
                                  </div>
                              }
                              >
                                <span className="fz14">出借-售后212期</span>
                                <Brief style={{fontSize:'13px'}}>02-23 10:20</Brief>
                              </Item>
                              <Item
                                thumb={require("assets/images/icon/asset.png")}
                                multipleLine
                                extra={
                                  <div>
                                    <span className="red-color">
                                        +80
                                    </span>
                                  </div>
                              }
                              >
                                <span className="fz14">回款售后回款223</span>
                                <Brief style={{fontSize:'13px'}}>02-23 10:20</Brief>
                              </Item>
                            </List>
                            <List className="list my-list fz14 full" renderHeader={() => '1月'}>
                              <Item
                                thumb={require("assets/images/icon/down.png")}
                                multipleLine
                                extra={
                                  <div>
                                    <span className="red-color">
                                        +80
                                    </span>
                                  </div>
                              }
                              >
                                <span className="fz14">回款售后回款223</span>
                                <Brief style={{fontSize:'13px'}}>02-23 10:20</Brief>
                              </Item>
                              <Item
                                thumb={require("assets/images/icon/minus.png")}
                                multipleLine
                                extra={
                                  <div>
                                    <span className="dark-color">
                                        -9980
                                    </span>
                                  </div>
                              }
                              >
                                <span className="fz14">提现</span>
                                <Brief style={{fontSize:'13px'}}>02-23 10:20</Brief>
                              </Item>
                              <Item
                                thumb={require("assets/images/icon/add.png")}
                                multipleLine
                                extra={
                                  <div>
                                    <span className="red-color">
                                        +9980
                                    </span>
                                  </div>
                              }
                              >
                                <span className="fz14">充值</span>
                                <Brief style={{fontSize:'13px'}}>02-23 10:20</Brief>
                              </Item>
                              <Item
                                thumb={require("assets/images/icon/up.png")}
                                multipleLine
                                extra={
                                  <div>
                                    <span className="dark-color">
                                        -8080
                                    </span>
                                  </div>
                              }
                              >
                                <span className="fz14">出借-售后212期</span>
                                <Brief style={{fontSize:'13px'}}>02-23 10:20</Brief>
                              </Item>
                              <Item
                                thumb={require("assets/images/icon/asset.png")}
                                multipleLine
                                extra={
                                  <div>
                                    <span className="red-color">
                                        +80
                                    </span>
                                  </div>
                              }
                              >
                                <span className="fz14">回款售后回款223</span>
                                <Brief style={{fontSize:'13px'}}>02-23 10:20</Brief>
                              </Item>
                            </List>
                        </div>
                        <div>
                          <List className="list my-list fz14 full" renderHeader={() => '2月'}>
                              <Item
                                thumb={require("assets/images/icon/down.png")}
                                multipleLine
                                extra={
                                  <div>
                                    <span className="red-color">
                                        +80
                                    </span>
                                  </div>
                              }
                              >
                                <span className="fz14">回款售后回款223</span>
                                <Brief style={{fontSize:'13px'}}>02-23 10:20</Brief>
                              </Item>
                              <Item
                                thumb={require("assets/images/icon/add.png")}
                                multipleLine
                                extra={
                                  <div>
                                    <span className="red-color">
                                        +9980
                                    </span>
                                  </div>
                              }
                              >
                                <span className="fz14">充值</span>
                                <Brief style={{fontSize:'13px'}}>02-23 10:20</Brief>
                              </Item>

                            </List>
                          
                        </div>
                        <div>
                          <List className="list my-list fz14 full" renderHeader={() => '2月'}>
                              <Item
                                thumb={require("assets/images/icon/minus.png")}
                                multipleLine
                                extra={
                                  <div>
                                    <span className="dark-color">
                                        -9980
                                    </span>
                                  </div>
                              }
                              >
                                <span className="fz14">提现</span>
                                <Brief style={{fontSize:'13px'}}>02-23 10:20</Brief>
                              </Item>
                              <Item
                                thumb={require("assets/images/icon/up.png")}
                                multipleLine
                                extra={
                                  <div>
                                    <span className="dark-color">
                                        -8080
                                    </span>
                                  </div>
                              }
                              >
                                <span className="fz14">出借-售后212期</span>
                                <Brief style={{fontSize:'13px'}}>02-23 10:20</Brief>
                              </Item>
                            </List>
                          
                        </div>
                      </Tabs>
                </div>
            </div>
        )
    }
}