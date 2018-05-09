/**
 * Created by zk on 2018/4/19
 */
import React from 'react';
import { NavBar,Icon,WhiteSpace } from 'antd-mobile';
import Statement from 'components/statement/risknotice';


export default class Use extends React.Component{
    render(){
        return(
            <div className="white-bg">
                <NavBar
                  mode="light"
                  icon={<Icon type="left" />}
                  onLeftClick={() => window.history.go(-1)}
                >
                    <span className="fz16">资金用途</span>
                </NavBar>
                <div className="padding-sm border-top">
                    <div>资金用途</div>
                    <div className="project-table margin-top-sm">
                        <table className="full">
                            <tbody>
                            <tr>
                                <td width="100%">项目名称</td>
                            </tr>
                            <tr>
                                <td>xxx 公司</td>
                            </tr>
                            <tr>
                                <td>xxx 公司</td>
                            </tr>
                            <tr>
                                <td>xxx 公司</td>
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