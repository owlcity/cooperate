/**
 * Created by zk on 2018/05/08
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { List,NavBar,Icon,InputItem, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';
import BankNotice from '@/components/statement/banknotice';
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
                    <Item  className="padding-bottom-sm" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
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
                            充值金额
                        </InputItem>
                        <InputItem
                            {...getFieldProps('money')}
                            type="number"
                            placeholder="输入充值金额"
                            className="padding-vertical fz22"
                        >
                            <span className="fz20">￥</span>
                        </InputItem>
                      
                    </List>
                    <div className="padding-sm padding-bottom-xl">

                        <Link to="/account/charge" className="btn-lg yellow-bg">
                            充值
                        </Link>
                    </div>
                </div>

            </div>
        )
    }
}

const Charge = createForm()(ChargeMoney);
export default Charge;