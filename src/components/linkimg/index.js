/**
 * Created by zk on 2018/4/12
 */
import React from 'react';

export default class LinkImg extends React.Component{
    render(){
        return(
            <div>
                <a href={this.props.link}>
                    <img style={{width:this.props.width}} src={this.props.src} alt="" />
                </a>
            </div>
        )
    }
}
