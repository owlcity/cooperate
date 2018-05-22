/**
 * Created by zk on 2018/4/19
 */
import React from 'react';
import { NavBar,Icon,WhiteSpace } from 'antd-mobile';
import Statement from 'components/statement/risknotice';


export default class Risk extends React.Component{
    render(){
        return(
            <div className="white-bg">
                <NavBar
                  mode="light"
                  icon={<Icon type="left" />}
                  onLeftClick={() => window.history.go(-1)}
                >
                    <span className="fz16">项目风险评估</span>
                </NavBar>
                <div className="padding-sm">
                    <div className="icon-title">
                        <img alt="" className="icon-title-img" src={require("assets/images/home/icon_evalute.png")} />
                        项目风险评估
                    </div>
                    <div className="project-table margin-top-sm">
                        <table className="full">
                            <tbody>
                            <tr>
                                <td width="30%">财务状况</td>
                                <td width="70%">姓名</td>
                            </tr>
                            <tr>
                                <td>征信状况</td>
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
                        <img alt="" className="icon-title-img" src={require("assets/images/home/icon_sigh.png")} />
                        可能产生的风险
                    </div>
                    <div className="project-table margin-top-sm">
                        <table className="full">
                            <tbody>
                            <tr>
                                <td width="30%">财务状况</td>
                                <td width="70%">姓名</td>
                            </tr>
                            <tr>
                                <td>征信状况</td>
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