/**
 * Created by zk on 2018/4/16
 */
import React from 'react';
import { Route,Link, BrowserRouter as Router } from 'react-router-dom';
import { Flex,Button,Progress,Badge } from 'antd-mobile';
export default class ItemList extends React.Component{
    render(){
        return(
            <div className="item white-bg padding-top-sm padding-bottom">
                <div className="padding-left-sm margin-bottom-sm">
                  <Badge text="暖" hot style={{ marginRight: 10,backgroundColor: '#2181FA',padding: '0 3px' }} />
                  <Badge text="喜" style={{ marginRight:10, padding: '0 3px', backgroundColor: '#FF3C46', borderRadius: 2, }} />
                  <Badge text="乐" hot style={{ marginRight: 10,backgroundColor: '#7f47dd',padding: '0 3px' }} />
                  <Badge text="吉" style={{ marginRight:10, padding: '0 3px', backgroundColor: '#39b54a', borderRadius: 2, }} />
                  <Link to="/project" >
                    售后回租
                  </Link>
                  <Badge text="币" style={{ marginLeft:4, padding: '0 3px', backgroundColor: '#FF7800', borderRadius: 2, }} />
                  <Badge text="券" style={{ marginLeft:4, padding: '0 3px', backgroundColor: '#FF7800', borderRadius: 2, }} />
                  <Badge text="福" style={{ marginLeft:4, padding: '0 3px', backgroundColor: '#FF7800', borderRadius: 2, }} />
                </div>
                <Flex className="item-con tac">
                    <Flex.Item>
                        <div className="item-top orange-color">
                          <span className="fz24">9.2</span>
                          <span className="fz14">%</span>
                        </div>
                        <div className="ellipsis fz12 gray-color margin-top-xs">协议约定借款年华利率</div>
                    </Flex.Item>
                    <Flex.Item>
                        <div className="item-top orange-color">
                          <span className="fz18">30</span>
                          <span className="fz12">天</span>
                        </div>
                        <div className="fz12 gray-color margin-top-xs">100元起投</div>
                    </Flex.Item>
                    <Flex.Item>
                        <div className="inline-block item-top" style={{width:"80px"}} >
                            <Link to="/project" >
                            <Button className="btn-sm" type="primary">出借</Button>
                            </Link>
                            <Button className="orange-bg btn-sm" type="primary">15:00发布</Button>
                            <Button className="gray-bg btn-sm" type="primary">15:00发布</Button>
                            <Progress className="radius-circle margin-top-xs" percent={40} position="normal"  />
                        </div>
                        <div className="fz12 gray-color margin-top-xs">剩余18.3万</div>
                        <div className="fz12 orange-color margin-top-xs">左划开启自动出借</div>

                    </Flex.Item>
                </Flex>
            </div>
        )
    }
}