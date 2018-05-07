/**
 * Created by zk on 2018/05/07
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar,Icon,Button,Progress,Flex,Badge,WhiteSpace,List } from 'antd-mobile';
import Statement from 'components/statement';
const Item = List.Item;

export default class MylendDetal extends React.Component {
    render(){
        return (    
            <div className="yellow-bg padding-bottom-lg">
                <NavBar
                  mode="dark"
                  icon={<Icon type="left" />}
                  onLeftClick={() => window.history.go(-1)}
                  style={{backgroundColor:"rgb(254,199,46)"}}
                >
                    <span className="fz16">出借详情</span>
                </NavBar>
                <div className="lend-detail">
                    <div className="list-con">
                      <div className="list-con-title tal">
                        <Badge text="暖" hot style={{ marginRight: 10,backgroundColor: '#2181FA',
                            padding: '0 3px' }} />
                            <strong className="fz14">售后回租223期</strong>
                        <div className="tac fr" style={{width:'90px'}}>
                            <strong className="fz16">1000元</strong>
                        </div>
                      </div>
                      <Flex className="list-main">
                          <Flex.Item className="color-666">
                              <div>出借金额:1000元</div>
                              <div>协议约定预期收益:78元</div>
                              <div>协议约定借款年化利率:7.7%</div>
                              <div>借款期限:30天</div>
                          </Flex.Item>
                          <div className="tac" style={{width:'90px'}}>
                            <Button className="yellow-bg btn-sm" type="primary">回款中</Button>
                          </div>
                      </Flex>
                      
                    </div>
                    <div className="project-progress margin-horizontal-sm pr">
                        <Progress className="radius-circle margin-top-xs progress-state-1" percent={45} position="normal"  />
                        <span className="pro progress-font tac" style={{"left":"45%"}} >8/12</span>
                    </div>

                    <Flex className="item-con margin-top margin-horizontal-sm fz12 orange-color">
                        <Flex.Item className="tal">
                            <div>出借时间</div>
                            <div className="margin-top-xs">2018-03-03</div>
                        </Flex.Item>
                        
                        <Flex.Item className="tar">
                            <div>到期时间</div>
                            <div className="margin-top-xs">2018-03-03</div>
                        </Flex.Item>
                    </Flex>
                    <div className="fz16 margin-left-sm padding-vertical margin-top tal border-top"><strong>平台福利</strong></div>
                    <div className="margin-sm">
                        <div className="margin-bottom-sm">
                            <Badge text="金币" style={{ marginRight: 10, padding: '2px 7px', width:'50px',backgroundColor: '#FF7800', borderRadius: 0 }} />
                            获得金币300个
                        </div>
                        <div className="margin-bottom-sm">
                            <Badge text="现金券" style={{ marginRight: 10, padding: '2px 7px', width:'50px',backgroundColor: '#FF7800', borderRadius: 0 }} />
                            现金券抵扣100元
                        </div>
                        <div className="margin-bottom-sm">
                            <Badge text="活动" style={{ marginRight: 10, padding: '2px 7px', width:'50px',backgroundColor: '#FF7800', borderRadius: 0 }} />
                            活动返现30.22元
                        </div>

                    </div>
                    <div className="fz16 margin-left-sm padding-vertical margin-top tal border-top"><strong>回款情况</strong></div>
                    <div className="table margin-sm tac">
                        <table>
                            <tbody>
                            <tr>
                                <td width="33.33%">日期</td>
                                <td width="33.33%">金额</td>
                                <td width="33.33%">状态</td>
                            </tr>
                            <tr>
                                <td>2018-02-10</td>
                                <td>88.8</td>
                                <td className="green-color">已回款</td>
                            </tr>
                            <tr>
                                <td>2018-02-10</td>
                                <td>88.8</td>
                                <td className="green-color">已回款</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <List className="list border-top">
                        <Item arrow="horizontal">
                            <Link to="/project/borrower">
                            借款资金运用情况
                            </Link>
                        </Item>
                        <Item arrow="horizontal">
                            <Link to="/project/info">
                            借款协议1
                            </Link>
                        </Item>
                        <Item arrow="horizontal">
                            <Link to="/project/risk">
                            借款协议2
                            </Link>
                        </Item>
                      </List>


                </div>


            </div>
        )
    }
}