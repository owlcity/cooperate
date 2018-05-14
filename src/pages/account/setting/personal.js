/**
 * Created by zk on 2018/05/14
 */
import React from 'react';
import { NavBar,Icon,List,WhiteSpace,InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';
const Item = List.Item;

class PersonalDom extends React.Component{
    
    render(){
        const { getFieldProps } = this.props.form;

        return(
            <div className="white-bg">
                <NavBar
                  mode="light"
                  icon={<Icon type="left" />}
                  onLeftClick={() => window.history.go(-1)}
                  
                >
                    <span className="fz16 ">个人资料</span>
                </NavBar>
                <WhiteSpace className="bg-body" size="sm" />
                <List className="list">
                    <Item arrow="horizontal" extra={
                        <img alt="" style={{width:'60px',height:'auto',borderRadius:'3px'}} src={require("assets/images/home/version.png")} />
                    }>
                        头像
                    </Item>
                    <Item arrow="horizontal" extra={
                        <span className="fz14">130****3231</span>
                    }>
                        注册手机号
                    </Item>
                </List>
                <WhiteSpace className="bg-body" size="sm" />
                <List className="list border-list">
                    <Item arrow="horizontal" extra={
                        <span className="fz14">男</span>
                    }>
                        性别
                    </Item>
                    <Item arrow="horizontal" extra={
                        <span className="fz14">高中</span>
                    }>
                        最高学历
                    </Item>
                    <Item arrow="horizontal" extra={
                        <span className="fz14">复旦大学</span>
                    }>
                        毕业学校
                    </Item>
                    <Item arrow="horizontal" extra={
                        <span className="fz14">未婚</span>
                    }>
                        婚姻状况
                    </Item>
                    <Item arrow="horizontal" extra={
                        <span className="fz14">中国</span>
                    }>
                        出生地
                    </Item>
                    
                </List>
                <WhiteSpace className="bg-body" size="sm" />
                <List className="list border-list">
                    <InputItem
                        {...getFieldProps('occupation')}
                        type='text'
                        placeholder="请输入您的职业"
                        clear
                        style={{fontSize:'14px',textAlign:'right'}}
                      ><span className="fz14">职业</span>
                     </InputItem>
                     <InputItem
                        {...getFieldProps('occupation')}
                        type='text'
                        placeholder="请输入您的职位信息"
                        clear
                        style={{fontSize:'14px',textAlign:'right'}}
                      ><span className="fz14">职位信息</span>
                     </InputItem>
                     <InputItem
                        {...getFieldProps('occupation')}
                        type='text'
                        placeholder="请输入您的年收入"
                        clear
                        style={{fontSize:'14px',textAlign:'right'}}
                      ><span className="fz14">年收入</span>
                     </InputItem>
                </List>

                <WhiteSpace className="bg-body" size="lg" />
                <div className="padding-sm tac orange-color">确认</div>
            </div>
        )
    }
}
const Personal = createForm()(PersonalDom);
export default Personal;