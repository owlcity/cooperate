/**
 * Created by zk on 2018/4/18
 */
import React from 'react';
import { NavBar,Icon,WhiteSpace } from 'antd-mobile';
import Statement from 'components/statement';


export default class Borrower extends React.Component{
    render(){
        return(
            <div className="white-bg">
                <NavBar
                  mode="light"
                  icon={<Icon type="left" />}
                  onLeftClick={() => window.history.go(-1)}
                >
                    <span className="fz16">借款人信息</span>
                </NavBar>
                <div className="padding-sm border-top">
                    <div>借款人信息</div>
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