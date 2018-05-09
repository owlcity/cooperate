/**
 * Created by zk on 2018/05/08
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { List,NavBar,Icon,InputItem, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';
import BankNotice from '@/components/statement/banknotice';
import AgreeProtocal from 'components/statement/agreeprotocal';
const Item = List.Item;
const Brief = Item.Brief;

 class ChargeMoney extends React.Component{

    render(){
        const { getFieldProps } = this.props.form;
        return(
            <div className="">
                <NavBar
                  mode="light"
                  icon={<Icon type="left" />}
                  onLeftClick={() => window.history.go(-1)}
                  
                >
                    <span className="fz16 ">提现</span>
                </NavBar>
                <BankNotice />
                <List className="my-list">
                    <InputItem>
                        <span className="fz14"> 银行卡</span>
                    </InputItem>
                    <Item className="padding-bottom-sm" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
                      <strong className="fz14">中国银行储蓄卡(尾号2920)</strong>
                      <Brief>
                        <span className="fz12 grey-color">单比限额5万，每日限额20万</span>
                      </Brief>
                    </Item>
                  </List>
                <WhiteSpace size="sm" />
                <div>
                    <List className="calculate-input">
                        <InputItem className="fz12">
                            提现金额
                        </InputItem>
                        <InputItem
                            {...getFieldProps('money')}
                            type="number"
                            placeholder="输入充值金额"
                            className="padding-vertical padding-bottom-0 fz22"
                            extra={
                                <div>
                                    <span className="gray-color margin-horizontal-sm"> | </span>
                                    <Link target="_self" className="orange-color" to="" >
                                        全部提现
                                    </Link>
                                </div>
                            }
                        >
                            <span className="fz20">￥</span>
                        </InputItem>
                        <Item extra={
                            <div className="dark-color">提现手续费 <span className="orange-color">2元</span></div>
                        }>
                            账户余额 <span className="orange-color">219.00元</span>
                        </Item>
                      
                    </List>
                    <AgreeProtocal txt="xxx协议" protocal=""  />
                    <div className="padding-sm padding-bottom-xl">

                        <Link to="/account/withdraw/callback" className="btn-lg yellow-bg">
                            提现
                        </Link>
                    </div>
                </div>

            </div>
        )
    }
}

const Charge = createForm()(ChargeMoney);
export default Charge;