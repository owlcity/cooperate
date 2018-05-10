/**
 * Created by zk on 2018/05/10
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar,Icon,List,WhiteSpace } from 'antd-mobile';
const Item = List.Item;

export default class Setting extends React.Component{
    
    render(){
        return(
            <div className="white-bg">
                <NavBar
                  mode="light"
                  icon={<Icon type="left" />}
                  onLeftClick={() => window.history.go(-1)}
                  
                >
                    <span className="fz16 ">设置</span>
                </NavBar>
                <WhiteSpace className="bg-body" size="sm" />
                <List className="list">
                    <Item arrow="horizontal" extra={
                        <span className="fz14">修改</span>
                    }>
                        <Link to="/project/borrower">
                         登陆密码
                        </Link>
                    </Item>
                    <Item arrow="horizontal" extra={
                        <span className="fz14">修改</span>
                    }>
                        <Link to="/project/info">
                        支付密码
                        </Link>
                    </Item>
                </List>
                <WhiteSpace className="bg-body" size="sm" />
                <List className="list">
                    <Item arrow="horizontal" extra={
                        <span className="fz14">添加/修改</span>
                    }>
                        <Link to="/project/borrower">
                         地址
                        </Link>
                    </Item>
                    <Item arrow="horizontal">
                        <Link to="/project/info">
                        意见反馈
                        </Link>
                    </Item>
                    <Item arrow="horizontal">
                        <Link to="/project/info">
                        微信消息
                        </Link>
                    </Item>
                    <Item arrow="horizontal" extra={
                        <span className="fz14">1.01</span>
                    }>
                        版本信息
                    </Item>
                </List>
                <WhiteSpace className="bg-body" size="lg" />
                <div className="padding-sm tac orange-color">安全退出</div>
            </div>
        )
    }
}