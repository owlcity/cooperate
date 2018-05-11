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
                <List className="list border-list">
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
                <List className="list border-list">
                    <Item arrow="horizontal" extra={
                        <Link to="/account/setting/address" className="fz14">添加/修改</Link>
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
                    
                </List>
                <WhiteSpace className="bg-body" size="lg" />
                <List className="list border-list">
                    <Item arrow="horizontal" extra={
                        <span className="orange-color fz14">立即开启</span>
                    }>
                        <Link to="/project/info">
                        微信消息
                        </Link>
                    </Item>
                </List>
                    <div className="lightgrey-color padding-sm line-height taj">
                        绑定微信服务号，及时掌握每笔资金动向，体验一站式尊贵服务。<br/>
1. 开启 “微信消息” 后， 将自动为您复制囧羊理财官方微信账号到您
的手机；<br/>
2. 打开微信——添加朋友 ——搜索栏中粘贴囧羊理财服务号——在结
果页中关注我们；<br/>
3. 开启“微信消息”， 打开新世界的大门。
                    </div>
                <WhiteSpace className="bg-body" size="lg" />
                <List className="list border-list">
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