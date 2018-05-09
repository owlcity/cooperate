/**
 * Created by zk on 2018/05/09
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd-mobile';
export default class AgreeProtocal extends React.Component{
    render(){
        return(
            <div className="padding-sm fz12">
                <Icon className="icon padding-right-xs" type="check-circle" size="xxs" color="#6fd35e" />
                我已同意<Link to={this.props.protocal} className="orange-color">{this.props.txt}</Link>
            </div>
        )
    }
}
