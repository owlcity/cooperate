/**
 * Created by zk on 2018/05/11
 */
import React from 'react';
import { NavBar,Icon,List,InputItem,Button } from 'antd-mobile';
import { createForm } from 'rc-form';

class LoginCon extends React.Component{
    submit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((error, value) => {
          if(!error){
            console.log(value)
          }
        });
    }
    render(){
        const { getFieldProps } = this.props.form;
        return(
            <div className="white-bg">
                <NavBar
                  mode="light"
                  icon={<Icon type="left" />}
                  onLeftClick={() => window.history.go(-1)}
                  
                >
                    <span className="fz16 ">登录</span>
                </NavBar>
                 
                 <div>
                    <div className="padding-sm">用户名：</div>
                    <List className="calculate-input">

                        <InputItem
                            {...getFieldProps('phone')}
                            type="phone"
                            placeholder="请输入手机号码"
                        ></InputItem>
                    </List>
                    <div className="padding-sm">密码：</div>
                    <List className="calculate-input">

                        <InputItem
                            {...getFieldProps('password')}
                            type="password"
                            placeholder="请输入密码"
                        >
                        </InputItem>
                    </List>
                    <div className="padding-sm padding-vertical-xl">
                        <Button onClick={this.submit} to="/calculator/result" className="btn-lg yellow-bg">
                            登录
                        </Button>
                    </div>
                </div>

            </div>
        )
    }
}

const Login = createForm()(LoginCon);
export default Login;