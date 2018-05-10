/**
 * Created by zk on 2018/5/03
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar,Icon } from 'antd-mobile';

export default class GoldCoin extends React.Component{
    render(){
        return(
            <div className="white-bg">
                <NavBar
                  mode="dark"
                  icon={<Icon type="left" />}
                  onLeftClick={() => window.history.go(-1)}
                  rightContent={
                    <Link className="white-color fz12"  to="/account/goldcoin/detail" >
                            金币明细
                        </Link>
                  }
                  style={{backgroundColor:'#FFC800'}}
                >
                    <span className="fz16">我的金币</span>
                </NavBar>
                <div className="padding white-color yellow-bg">
                    <div className="margin-bottom-sm">总资产（元）</div>
                    <div><strong className="text-shadow fz28">121982001.89 </strong><span className="fz16">&gt;</span></div>
                </div>
                <div className="goldcoin-tip">
                    您有28191金币将于12月31号到期，请尽快使用
                </div>
            </div>
        )
    }
}