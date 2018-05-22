/**
 * Created by zk on 2018/4/19
 */
import React from 'react';
import { NavBar,Icon,WhiteSpace } from 'antd-mobile';
import Statement from 'components/statement/risknotice';


export default class Info extends React.Component{
    render(){
        return(
            <div className="white-bg">
                <NavBar
                  mode="light"
                  icon={<Icon type="left" />}
                  onLeftClick={() => window.history.go(-1)}
                >
                    <span className="fz16">项目基本信息</span>
                </NavBar>
                <div className="padding-sm">
                    <div className="icon-title">
                        <img alt="" className="icon-title-img" src={require("assets/images/home/icon_evalute.png")} />
                        企业简介
                    </div>
                    <div className="margin-top-sm line-height-18 taj">
                        本次借款项目为吉羊系列的企信宝项目，融资企业是专业从事汽车电子零部件的生产，汽车配件、模具、生产，加工，占地面积5000平方米，公司建立了完善的质保体系，通过了ISO9000、ISO14000、QC080000质量体系认证。拥有成套的加工设备和成熟的加工工艺，先进的测试设备确保产品质量稳定可靠，以满足广大客户的需求。产品按国家标准、行业标准进行设计制造和检测。还可以根据客户特殊需要设计制造专用电子零部件。产品配套于北汽福田、江淮、大众、上汽、江苏卡威、东风、东风柳汽、江铃、长城、力帆等主机厂。公司一贯奉行“奋发向上、求实创新”的企业精神,秉循“用户至上、质量第一、服务周全”的企业宗旨，强化内部管理 ，使企业的整体素质不断提高。精良的生产设备，先进的加工工艺，齐全的检测手段，完善的质保体系，使企业发展和取信于用户提供了根本保证。
                    </div>
                </div>
                <WhiteSpace className="bg-body" size="sm" />
                <div className="padding-sm">
                    <div className="icon-title">
                        <img alt="" className="icon-title-img" src={require("assets/images/home/icon_down.png")} />
                        还款来源
                    </div>
                    <div className="project-table margin-top-sm">
                        <table className="full">
                            <tbody>
                            <tr>
                                <td width="30%">经营收入</td>
                                <td width="70%">xx</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <WhiteSpace className="bg-body" size="sm" />
                <div className="padding-sm">
                    <div className="icon-title">
                        <img alt="" className="icon-title-img" src={require("assets/images/home/icon_evalute.png")} />
                        还款保障措施
                    </div>
                    <div className="margin-top-sm taj line-height-18">
                        ·项目保障·
平台经过严格审核，在确认本应收账款债权债务关系清晰透明，最大限度还原交易过程后，根据项目企业已发已有应收账款，与其签订应收账款质押合同。投资人本息到期日严格控制在应收期限内，所有投资人款项于项目一一对应，确保项目的真实性与完整性。
                    </div>
                </div>
                <WhiteSpace className="bg-body" size="sm" />
                <div className="padding-sm">
                    <div className="icon-title">
                        <img alt="" className="icon-title-img" src={require("assets/images/home/icon_user.png")} />
                        还款保障措施-担保方信息
                    </div>
                    <div className="project-table margin-top-sm">
                        <table className="full">
                            <tbody>
                            <tr>
                                <td width="30%">担保人1</td>
                                <td width="70%">姓名</td>
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
                        <img alt="" className="icon-title-img" src={require("assets/images/home/icon_verify.png")} />
                        还款保障措施-验证信息
                    </div>
                    <div className="project-table margin-top-sm">
                        <table className="full">
                            <tbody>
                            <tr>
                                <td width="30%">法定代表信息</td>
                                <td width="70%">身份证</td>
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
                        <img alt="" className="icon-title-img" src={require("assets/images/home/icon_img.png")} />
                        资料信息
                    </div>
                    <div className="project-table margin-top-sm">
                        
                    </div>
                </div>
                <WhiteSpace className="bg-body" size="sm" />
                <div className="padding-sm">
                    <div className="icon-title">
                        <img alt="" className="icon-title-img" src={require("assets/images/home/icon_evalute.png")} />
                        贷后跟踪
                    </div>
                    <div className="project-table margin-top-sm">
                        
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