/**
 * Created by zk on 2018/4/24
 */
import React from 'react';
import img from "assets/images/icon/exclamation.svg"
import { Button } from 'antd-mobile';

export default class Fail extends React.Component{
    render(){
        return(
            <div className="tac">
                <div className="padding-vertical-lg"><img alt="" className="result-icon" src={require("assets/images/icon/exclamation_red.svg")} /></div>
                <div className="fz22 red-color">交易失败</div>
                <div className="margin-vertical-lg gray-color">交易失败交易失败</div>
                <div className="margin-horizontal-xl">
                    <Button className="btn-lg margin-top-sm" type="warning">
                        联系客服
                    </Button>
                </div>
            </div>
        )
    }
}