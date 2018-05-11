/**
 * Created by zk on 2018/05/11
 */
import React from 'react';
import { NavBar,Icon,List,InputItem,Button,TextareaItem } from 'antd-mobile';
import { createForm } from 'rc-form';

class Address extends React.Component{
    
    render(){
        const { getFieldProps } = this.props.form;
        return(
            <div className="white-bg">
                <NavBar
                  mode="light"
                  icon={<Icon type="left" />}
                  onLeftClick={() => window.history.go(-1)}
                  
                >
                    <span className="fz16 ">新增管理</span>
                </NavBar>
                 
                 <div>
                    <List className="calculate-input">
                        <InputItem
                            {...getFieldProps('name')}
                            type="text"
                            placeholder="姓名"
                        >联系人</InputItem>
                        <InputItem
                            {...getFieldProps('phone')}
                            type="number"
                            placeholder="手机号码"
                        >电话</InputItem>
                        <div className="padding-horizontal-sm">
                            <div className="fz14 padding-vertical-sm border-bottom">详细地址:</div>
                            <TextareaItem
                                {...getFieldProps('note1')}
                                rows={3}
                                placeholder="输入详细地址"
                                style={{fontSize:'14px',marginLeft:'-15px'}}
                            >
                            </TextareaItem>
                        </div>
                    </List>
                    <div className="padding-sm padding-vertical-xl">
                        <Button to="/calculator/result" className="btn-lg yellow-bg">
                            保存
                        </Button>
                    </div>
                </div>

            </div>
        )
    }
}

const EditAddress = createForm()(Address);
export default EditAddress;