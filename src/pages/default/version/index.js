/**
 * Created by zk on 2018/05/14
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar,Icon,List,WhiteSpace } from 'antd-mobile';
const Item = List.Item;

export default class Version extends React.Component{
    
    render(){
        return(
            <div className="white-bg">
                <NavBar
                  mode="light"
                  icon={<Icon type="left" />}
                  onLeftClick={() => window.history.go(-1)}
                  
                >
                    <span className="fz16 ">版本信息</span>
                </NavBar>
                <div className="padding-xl white-bg tac">
                    <img width='60' alt="" src={require("assets/images/home/version.png")} />
                    <div className="margin-top-sm fz22">囧羊理财</div>
                </div>
                <WhiteSpace className="bg-body" size="sm" />
                <List className="list border-list">
                    <Item arrow="horizontal" extra={
                        <span className="fz12">www.jylc168.com</span>
                    }>
                        <Link to="/project/info">
                        官方网站
                        </Link>
                    </Item>
                    <Item arrow="horizontal" extra={
                        <span className="fz12">400-955-9588</span>
                    }>
                        客服电话
                        <span className="lightgrey-color margin-left-xs fz12">工作时间9:00-21:00</span>
                    </Item>
                    <Item arrow="horizontal" extra={
                        <span className="fz12">shjylc</span>
                    }>
                        微信服务号
                    </Item>
                </List>
                
            </div>
        )
    }
}