/**
 * Created by zk on 2018/4/19
 */
import React from 'react';
import { Link } from 'react-router-dom';

import { NavBar,Icon,WhiteSpace } from 'antd-mobile';


export default class Calculator extends React.Component{
    render(){
        return(
            <div className="white-bg">
                <NavBar
                  mode="light"
                  icon={<Icon type="left" />}
                  onLeftClick={() => window.history.go(-1)}
                  rightContent={
                    <Link className="btn-sm yellow-bg padding-horizontal-xs"  to="/calculator/relax" >
                            轻松版
                     </Link>
                  }
                >
                    <span className="fz16 ">计算器</span>
                </NavBar>


                <WhiteSpace className="bg-body" size="sm" />
                <div className="white-bg padding-sm">

                </div>

            </div>
        )
    }
}