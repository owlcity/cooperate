/**
 * Created by zk on 2018/4/11
 */
import React from 'react';
import { Flex,Button } from 'antd-mobile';

export default class TrainCamp extends React.Component{
    render(){
        return(
            <div className="train-camp white-bg padding-top-sm padding-bottom">
                <div className="tac fz16">新手训练营</div>
                <Flex  align="start" className="train-con tac">
                    <Flex.Item className="mask-opacity">
                        <img alt="" src={require("assets/images/home/new_reward1.png")} />
                        <div>50金币</div>
                    </Flex.Item>
                    <Flex.Item>
                        <img alt="" src={require("assets/images/home/new_reward1.png")} />
                        <div>50金币</div>
                        <div>
                            <Button className="btn-md margin-top-sm" type="warning">绑卡领金币</Button>
                        </div>
                    </Flex.Item>
                    <Flex.Item className="grayscale">
                        <img alt="" src={require("assets/images/home/new_reward1.png")} />
                        <div>50金币</div>
                    </Flex.Item>
                </Flex>
            </div>
        )
    }
}