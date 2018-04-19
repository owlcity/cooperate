/**
 * Created by zk on 2018/4/19
 */
import React from 'react';
import { NavBar,Icon,WhiteSpace,List } from 'antd-mobile';
import Statement from 'components/statement';
const Item = List.Item;
const Brief = Item.Brief;

export default class Records extends React.Component{
    render(){
        return(
            <div className="white-bg">
                <NavBar
                  mode="light"
                  icon={<Icon type="left" />}
                  onLeftClick={() => window.history.go(-1)}
                >
                    <span className="fz16 ">出借记录</span>
                </NavBar>
                <div className="padding-left-sm border-top">
                    <List className="list extra-color">
                        <Item multipleLine extra="￥10000">
                          185****2192 
                          <Brief style={{"fontSize":"12px"}}>2018-01-18</Brief>
                        </Item>
                        <Item multipleLine extra="￥10000">
                          185****2192 
                          <Brief style={{"fontSize":"12px"}}>2018-01-18</Brief>
                        </Item>
                        <Item multipleLine extra="￥10000">
                          185****2192 
                          <Brief style={{"fontSize":"12px"}}>2018-01-18</Brief>
                        </Item>
                    </List>

                </div>
                <WhiteSpace className="bg-body" size="sm" />
                <div className="white-bg padding-sm">
                    <Statement />
                </div>

            </div>
        )
    }
}