/**
 * Created by zk on 2018/4/23
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar,Icon } from 'antd-mobile';

export default class CalcValue extends React.Component{
    render(){
        return(
            <div className="bark-bg padding-bottom-sm">
                <NavBar
                  mode="dark"
                  icon={<Icon type="cross" />}
                  onLeftClick={() => window.history.go(-1)}
                  
                >
                    <span className="fz16 ">计算结果</span>
                </NavBar>
                <div className="margin-sm padding-sm white-bg">
                    <div className="table fz12">
                        <table>
                            <tbody>
                                <tr>
                                    <td width="50%">出借金额</td>
                                    <td width="50%" className="tar">10000元</td>
                                </tr>
                                <tr>
                                    <td>出借期限</td>
                                    <td className="tar">3个月</td>
                                </tr>
                                <tr>
                                    <td>协议约定年化收益利率</td>
                                    <td className="tar">8%</td>
                                </tr>
                                <tr>
                                    <td>还款方式</td>
                                    <td className="tar">先息后本</td>
                                </tr>
                                <tr>
                                    <td>现金券</td>
                                    <td className="tar">50元</td>
                                </tr>
                                <tr>
                                    <td>加息卡</td>
                                    <td className="tar">0.3%</td>
                                </tr>
                                <tr>
                                    <td>福袋</td>
                                    <td className="tar">100元</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="padding-vertical margin-top border-top"><strong>收益合计</strong></div>
                    <div className="table">
                        <table><tbody>
                            <tr>
                                <td width="50%">实际协议年化收益率</td>
                                <td width="50%">13.6%</td>
                            </tr>
                            <tr>
                                <td>本息合计</td>
                                <td>1000元</td>
                            </tr>
                            <tr>
                                <td>回收本金</td>
                                <td>1000元</td>
                            </tr>
                            <tr>
                                <td>利息合计</td>
                                <td>1000元</td>
                            </tr>
                        </tbody></table>
                    </div>
                    <div className="padding-vertical margin-top border-top"><strong>收益明细</strong></div>
                    <div className="table tac">
                        <table><tbody>
                            <tr>
                                <td width="25%">期数</td>
                                <td width="25%">应收本金</td>
                                <td width="25%">应收利息</td>
                                <td width="25%">应收本息</td>
                            </tr>
                            <tr>
                                <td><strong>1</strong></td>
                                <td>0</td>
                                <td>88.8</td>
                                <td>88.8</td>
                            </tr>
                            <tr>
                                <td><strong>2</strong></td>
                                <td>1</td>
                                <td>88.8</td>
                                <td>88.8</td>
                            </tr>
                            <tr>
                                <td><strong>3</strong></td>
                                <td>10000</td>
                                <td>88.8</td>
                                <td>10088.8</td>
                            </tr>
                        </tbody></table>
                    </div>
                    <Link to="/calculator/major" className="btn-lg yellow-bg margin-vertical">
                            重新计算
                    </Link>
                </div>

            </div>
        )
    }

}