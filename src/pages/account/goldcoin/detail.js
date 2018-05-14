/**
 * Created by zk on 2018/05/10
 */
import React from 'react';
import { NavBar,Icon,List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;

export default class GoldCoinDetail extends React.Component{
    
    render(){
        return(
            <div className="white-bg">
                <NavBar
                  mode="light"
                  icon={<Icon type="left" />}
                  onLeftClick={() => window.history.go(-1)}
                  
                >
                    <span className="fz16 ">金币明细</span>
                </NavBar>
                <List className="fz14 full">
                  <Item
                    multipleLine
                    extra={
                      <div>
                        <span className="red-color">
                            +9980
                        </span>
                      </div>
                  }
                  >
                    <span className="fz14">每日签到</span>
                    <Brief style={{fontSize:'13px'}}>02-23 10:20</Brief>
                  </Item>
                  <Item
                    multipleLine
                    extra={
                      <div>
                        <span className="dark-color">
                            -9980
                        </span>
                      </div>
                  }
                  >
                    <span className="fz14">话费充值</span>
                    <Brief style={{fontSize:'13px'}}>02-23 10:20</Brief>
                  </Item>
                  <Item
                    multipleLine
                    extra={
                      <div>
                        <span className="dark-color">
                            -9980
                        </span>
                      </div>
                  }
                  >
                    <span className="fz14">话费充值</span>
                    <Brief style={{fontSize:'13px'}}>02-23 10:20</Brief>
                  </Item>
                  <Item
                    multipleLine
                    extra={
                      <div>
                        <span className="dark-color">
                            -9980
                        </span>
                      </div>
                  }
                  >
                    <span className="fz14">话费充值</span>
                    <Brief style={{fontSize:'13px'}}>02-23 10:20</Brief>
                  </Item>
                </List>
            </div>
        )
    }
}