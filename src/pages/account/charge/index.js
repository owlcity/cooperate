/**
 * Created by zk on 2018/05/08
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { List,NavBar,Icon,InputItem, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';
import BankNotice from '@/components/statement/banknotice';

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
                    <span className="fz16 ">充值</span>
                </NavBar>
                <BankNotice />
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

                        <Link to="/calculator/result" className="btn-lg yellow-bg">
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