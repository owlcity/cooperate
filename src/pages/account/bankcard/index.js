/**
 * Created by zk on 2018/5/03
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar,Icon } from 'antd-mobile';
import BankNotice from '@/components/statement/banknotice';

export default class BankCard extends React.Component{
    render(){
        return(
            <div className="white-bg">
                <NavBar
                  mode="light"
                  icon={<Icon type="left" />}
                  onLeftClick={() => window.history.go(-1)}
                  rightContent={
                    <Link className="orange-color fz12"  to="/account/capitaldetails" >
                        解绑 
                    </Link>
                  }
                >
                    <span className="fz16">银行卡</span>
                </NavBar>
                <BankNotice />
                <div className="padding-sm">
                    <div className="bank-con">
                        <div className="fz18">
                            <strong>中国工商银行</strong> <br />
                            <strong>6220 **** 4343</strong>
                        </div>
                        <div className="margin-top-sm fz12">
                            单比限额五万，每日限额十万
                        </div>
                        <Icon className="del-bank" type="cross-circle-o" color="#D2573E" />
                    </div>
                    <div className="bank-con">
                        <div className="fz18">
                            <strong>中国工商银行</strong> <br />
                            <strong>6220 **** 4343</strong>
                        </div>
                        <div className="margin-top-sm fz12">
                            单比限额五万，每日限额十万
                        </div>
                        <Icon className="del-bank" type="cross-circle-o" color="#D2573E" />
                    </div>

                    <div className="add-bank-btn">
                        添加银行卡
                    </div>

                </div>
            </div>
        )
    }
}