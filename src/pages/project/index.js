/**
 * Created by zk on 2018/4/16
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar,Icon,Progress,Flex,Badge,WhiteSpace,List,Button } from 'antd-mobile';
import Statement from 'components/statement';
const Item = List.Item;

export default class Project extends React.Component {
    render(){
        return (    
            <div className="white-bg">
                <NavBar
                  mode="light"
                  icon={<Icon type="left" />}
                  onLeftClick={() => window.history.go(-1)}
                  rightContent={[
                    <Icon key="1" type="ellipsis" />,
                  ]}
                >
                    <span className="fz16">售后回租228</span>
                </NavBar>
                <div className="tac">
                    <div className="margin-top margin-bottom-sm">
                        <strong className="fz32">10.2</strong>
                        <strong className="fz18">%</strong>
                    </div>
                    <div>
                        协议约定借款年华利率
                        <img className="icon margin-left-xs" width='16' alt="" src={require("assets/images/icon/exclamation.svg")} />
                    </div>
                    <div className="tip fz12 margin-top-xs">利率披露不构成对收益的承诺</div>
                    <div className="project-progress margin pr">
                        <Progress className="radius-circle margin-top-xs progress-state-1" percent={45} position="normal"  />
                        <span className="pro progress-font" style={{"left":"45%"}} >{45}</span>
                    </div>

                    <Flex className="item-con margin-top tac">
                        <Flex.Item>
                            <div>
                              <span className="fz18">90天</span>
                            </div>
                            <div className="ellipsis fz12 lightgrey-color margin-top-xs">借款期限</div>
                        </Flex.Item>
                        <Flex.Item>
                            <div>
                              <span className="fz18">50.33万</span>
                            </div>
                            <div className="ellipsis fz12 lightgrey-color margin-top-xs">可出借金额</div>
                        </Flex.Item>
                        <Flex.Item>
                            <div>
                              <span className="fz18">1000元</span>
                            </div>
                            <div className="ellipsis fz12 lightgrey-color margin-top-xs">起借金额</div>
                        </Flex.Item>
                    </Flex>
                    <div className="tip-suggest margin-top">投资人条件：建议风险承受能力“稳健型”及以上</div>
                    <div className="table margin-sm">
                        <table>
                            <tbody>
                            <tr>
                                <td width="30%">发布时间</td>
                                <td width="70%">2018-02-10 10:10:10</td>
                            </tr>
                            <tr>
                                <td>募集时间</td>
                                <td>2018-02-10 10:10:10</td>
                            </tr>
                            <tr>
                                <td>计息方式</td>
                                <td>先息后本</td>
                            </tr>
                            <tr>
                                <td>回款方式</td>
                                <td>满标放款后计息</td>
                            </tr>
                            <tr>
                                <td>抵扣方式</td>
                                <td>
                                    <Badge text="福袋" style={{ marginRight: 10, padding: '2px 7px', backgroundColor: '#FF7800', borderRadius: 0 }} />
                                    <Badge text="现金券" style={{ marginRight: 10, padding: '2px 7px', backgroundColor: '#FF7800', borderRadius: 0 }} />
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
                <WhiteSpace className="bg-body" size="sm" />
                <List className="list">
                    <Item arrow="horizontal">
                        <Link to="/project/borrower">
                        借款人信息
                        </Link>
                    </Item>
                    <Item arrow="horizontal">
                        <Link to="/project/info">
                        项目基本信息
                        </Link>
                    </Item>
                    <Item arrow="horizontal">
                        <Link to="/project/risk">
                        风险评估
                        </Link>
                    </Item>
                    <Item arrow="horizontal">
                        <Link to="/project/use">
                        借款资金运用信息
                        </Link>
                    </Item>
                    <Item arrow="horizontal">
                        <Link to="/project/records">
                        出借记录
                        </Link>
                    </Item>
                  </List>

                <WhiteSpace className="bg-body" size="sm" />
                <div className="white-bg padding-sm">
                    <Statement />
                </div>
                <WhiteSpace className="bg-body" size="xs" />

                <div className="padding-sm">
                    <Flex className="calc-loan-btn">
                        <Link to="/calculator/relax">
                        <div className="calc-button flex-center">
                            <img width='21' alt="" src={require("assets/images/icon/calculator.svg")} />
                        </div>
                        </Link>
                        <Flex.Item>
                        <Button type="primary" style={{"backgroundColor":"#ff7800","borderRadius":"0 100px 100px 0","height":"40px","lineHeight":"40px","fontSize":"16px"}} >出借</Button>
                        </Flex.Item>
                    </Flex>
                </div>
            </div>
        )
    }
}