/**
 * Created by zk on 2018/05/11
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Flex,NavBar,Icon } from 'antd-mobile';

export default class Address extends React.Component{
    
    render(){

        return(
            <div className="white-bg">
                <NavBar
                  mode="light"
                  icon={<Icon type="left" />}
                  onLeftClick={() => window.history.go(-1)}
                  
                >
                    <span className="fz16 ">地址管理</span>
                </NavBar>
                 <Flex className="padding-sm padding-right-0 border-bottom">
                      <Flex.Item className="">
                          <div><strong className="fz16">张三 18299992345</strong></div>
                          <div className="margin-top-sm line-height">详细地址详细地址详细地址详细地址详细地址详细地址</div>
                      </Flex.Item>
                      <div className="tac" style={{width:'140px'}}>
                         <Link to="/account/setting/editaddress">
                        <img src={require('assets/images/icon/edit.svg')} alt="" height="22" />
                        </Link>
                      </div>
                 </Flex>


            </div>
        )
    }
}