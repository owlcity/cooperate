/**
 * Created by zk on 2018/4/18
 */
import React from 'react';
import { NavBar,Icon,WhiteSpace } from 'antd-mobile';
import Statement from 'components/statement/risknotice';


export default class Borrower extends React.Component{
    render(){
        return(
            <div className="white-bg">
                <NavBar
                  mode="light"
                  icon={<Icon type="left" />}
                  onLeftClick={() => window.history.go(-1)}
                >
                    <span className="fz16">借款人基本信息</span>
                </NavBar>
                <div className="padding-sm">
                    <div className="icon-title">
                        <img alt="" className="icon-title-img" src={require("assets/images/home/icon_user2.png")} />
                        法定代表人信息
                    </div>
                    <div className="project-table margin-top-sm">
                        <table className="full">
                            <tbody>
                            <tr>
                                <td width="30%">姓名</td>
                                <td width="70%">姓名</td>
                            </tr>
                            <tr>
                                <td>年龄</td>
                                <td>xxx 岁</td>
                            </tr>
                            <tr>
                                <td>证件号</td>
                                <td>350******0000</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <WhiteSpace className="bg-body" size="sm" />
                <div className="padding-sm">
                    <div className="icon-title">
                        <img alt="" className="icon-title-img" src={require("assets/images/home/icon_info.png")} />
                        借款企业信息
                    </div>
                    <div className="project-table margin-top-sm">
                        <table className="full">
                            <tbody>
                            <tr>
                                <td width="30%">姓名</td>
                                <td width="70%">姓名</td>
                            </tr>
                            <tr>
                                <td>年龄</td>
                                <td>xxx 岁</td>
                            </tr>
                            <tr>
                                <td>证件号</td>
                                <td>350******0000</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <WhiteSpace className="bg-body" size="sm" />
                <div className="padding-sm">
                    <div className="icon-title">
                        <img alt="" className="icon-title-img" src={require("assets/images/home/icon_pie.png")} />
                        企业收入及负债情况
                    </div>
                    <div className="project-table margin-top-sm">
                        <table className="full">
                            <tbody>
                            <tr>
                                <td width="30%">姓名</td>
                                <td width="70%">姓名</td>
                            </tr>
                            <tr>
                                <td>年龄</td>
                                <td>xxx 岁</td>
                            </tr>
                            <tr>
                                <td>证件号</td>
                                <td>350******0000</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <WhiteSpace className="bg-body" size="sm" />
                <div className="white-bg padding-sm">
                    <Statement />
                </div>

            </div>
        )
    }
}