/**
 * Created by zk on 2018/4/11
 */
import React from 'react';
import { WhiteSpace } from 'antd-mobile';
import Tab from '@/pages/default/tabbar';
import ImgCarousel from 'components/carousel';
import LinkImg from 'components/linkimg';
import TrainCamp from 'components/traincamp';
import ItemList from 'components/itemlist';


export default class Lend extends React.Component{
    render(){
        return(
            <div>
                <ImgCarousel />
                <LinkImg 
                    link="https://m.jylc168.com/disclosure"
                    src={require("assets/images/home/info.jpg")}
                    width="100%"
                 />
                <WhiteSpace size="xs" />
                <TrainCamp />
                <WhiteSpace size="sm" />
                <ItemList />
                <ItemList />
                <ItemList />
                <div className="tac fz12 green-color padding-vertical-sm">银行全程提供资金托管</div>
                <Tab />
            </div>
        )
    }
}