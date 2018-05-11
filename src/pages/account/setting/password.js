/**
 * Created by zk on 2018/05/10
 */
import React from 'react';
import { NavBar,Icon,List,InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';

class SetPassword extends React.Component{
    render(){
        const { getFieldProps } = this.props.form;
        return(
            <div className="white-bg">
                <NavBar
                  mode="light"
                  icon={<Icon type="left" />}
                  onLeftClick={() => window.history.go(-1)}
                  
                >
                    <span className="fz16 ">修改密码</span>
                </NavBar>
                <div className="step-1">
                    <List className="list border-list">
                        <div className="fz32 margin-bottom margin-left-sm">原密码</div>
                        <div className="margin-bottom margin-left-sm">请输入原登录密码</div>
                        
                          <InputItem
                            {...getFieldProps('one')}
                            type="password"
                            placeholder="请输入原登录密码"
                            style={{background:'#FAFAFA',fontSize:'14px',padding:'10px'}}
                        ></InputItem>
                    </List>

                </div>
                <div className="margin-top-xl padding-sm tac white-color yellow-bg">下一步</div>

                <div className="step-2 confirm-pass">
                    <List className="list border-list">
                        <div className="fz32 margin-bottom margin-left-sm">新密码</div>
                        <div className="margin-bottom margin-left-sm">请填写6到18位任意字符</div>
                        <InputItem
                            {...getFieldProps('two')}
                            type="number"
                            placeholder="确认登录密码"
                            style={{background:'#FAFAFA',fontSize:'14px',padding:'10px'}}
                        ></InputItem>

                    </List>
                    <List className="list border-list">
                        <div className="margin-vertical margin-left-sm">再填写一次确保正确</div>
                          <InputItem
                            {...getFieldProps('confirm')}
                            type="number"
                            placeholder="确认登录密码"
                            style={{background:'#FAFAFA',fontSize:'14px',padding:'10px'}}
                        ></InputItem>

                    </List>
                    <div className="margin-top-xl padding-sm tac white-color yellow-bg">确认</div>
                </div>

            </div>
        )
    }
}
const Passwords = createForm()(SetPassword);
export default Passwords;