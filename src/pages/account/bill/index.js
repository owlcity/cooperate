/**
 * Created by zk on 2018/05/08
 */
import React from 'react';
import { Picker,NavBar,Icon } from 'antd-mobile';
import { createForm } from 'rc-form';
import LinkImg from 'components/linkimg';

const district =  [
    {
      label: '2018年5月',
      value: '1'
    },
    {
      label: '2018年4月',
      value: '2'
    },
    {
      label: '2018年3月',
      value: '3'
    },
    {
      label: '2018年2月',
      value: '4'
    }
];

class Billform extends React.Component {
    render(){
        const { getFieldProps } = this.props.form;

        return (    
            <div className="darkgray-bg padding-bottom-lg">
                <NavBar
                  mode="dark"
                  icon={<Icon type="left" />}
                  onLeftClick={() => window.history.go(-1)}
                  style={{backgroundColor:"rgb(83,86,93)"}}
                >
                    <span className="fz16">账单</span>
                </NavBar>
                <div className="bill-detail lend-detail">
                    <div className="bill-title">
                        <strong className="fz18">2018年2月</strong>
                        <Picker data={district} cols={1} {...getFieldProps('method')} >
                          <img height='20px' className="fr" alt="" src={require("assets/images/icon/bill.svg")} />
                        </Picker>
                    </div>
                    <div className="bill-list">
                        <div className="fz16 tac"><strong>本月回款(元)</strong></div>
                        <div className="fz22 tac margin-top-sm"><strong>31000.00</strong></div>
                        <div className="padding-vertical border-bottom">
                            <div className="margin-bottom-sm">
                                收益： ¥ 1000.00
                            </div>
                            <div className="margin-bottom-sm">
                                本金 ¥ 1000.00
                            </div>
                        </div>
                    </div>
                    <div className="bill-list">
                        <div className="fz16 tac"><strong>账户变动(元)</strong></div>
                        <div className="fz22 tac margin-top-sm"><strong>31000.00</strong></div>
                        <div className="padding-vertical border-bottom">
                            <div className="margin-bottom-sm">
                                充值 ¥ 1000.00
                            </div>
                            <div className="margin-bottom-sm">
                                提现 ¥ 1000.00
                            </div>
                        </div>
                    </div>

                    <div className="padding-sm">
                      <LinkImg 
                        link="https://m.jylc168.com/disclosure"
                        src={require("assets/images/account/autoinvest.png")}
                        width="100%"
                     />
                    </div>
                </div>


            </div>
        )
    }
}
const Bill = createForm()(Billform);
export default Bill;
