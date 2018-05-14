/**
 * Created by zk on 2018/05/10
 */
import React from 'react';
import { NavBar,Icon,List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;

export default class Prize extends React.Component{
    
    render(){
        return(
            <div className="white-bg">
                <NavBar
                  mode="light"
                  icon={<Icon type="left" />}
                  onLeftClick={() => window.history.go(-1)}
                  
                >
                    <span className="fz16 ">我的奖品</span>
                </NavBar>
                <List className="fz14 full">
                  <Item
                    multipleLine
                    extra={
                      <div>
                        <span className="green-color fz14">
                            已领取
                        </span>
                      </div>
                  }
                  >
                    <div className="fz16">
                        <strong>奖品标题</strong>
                    </div>
                    <div className="fz14 margin-top-xs">
                        <span>奖品来源</span>
                    </div>
                    <Brief style={{fontSize:'12px'}}>02-23 10:20</Brief>
                  </Item>
                  <Item
                    multipleLine
                    extra={
                      <div>
                        <span className="red-color fz14">
                            未领取
                        </span>
                      </div>
                  }
                  >
                    <div className="fz16">
                        <strong>奖品标题</strong>
                    </div>
                    <div className="fz14 margin-top-xs">
                        <span>奖品来源</span>
                    </div>
                    <Brief style={{fontSize:'12px'}}>02-23 10:20</Brief>
                  </Item>
                  
                </List>
            </div>
        )
    }
}