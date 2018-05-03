/**
 * Created by zk on 2018/5/03
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Flex,NavBar,Icon,WhiteSpace,List } from 'antd-mobile';
import { Chart, Axis, Geom, Tooltip  } from 'bizcharts';
const Item = List.Item;
const Brief = Item.Brief;
// 数据源
const data = [
  { month: "1月", value: 100 },
  { month: "2月", value: 300 },
  { month: "3月", value: 600 },
  { month: "4月", value: 900 },
  { month: "5月", value: 1200 },
  { month: "6月", value: 1500 }
];

// 定义度量
const cols = {
  'value': { min: 0 },
  'month': {range: [ 0 , 1] }
};

export default class Total extends React.Component{
    render(){
        return(
            <div className="white-bg">
                <NavBar
                  mode="light"
                  icon={<Icon type="left" />}
                  onLeftClick={() => window.history.go(-1)}
                  rightContent={[
                    <Link className="orange-color fz12"  to="/calculator/relax" >
                            资金明细
                        </Link>
                  ]}
                >
                    <span className="fz16">总资产</span>
                </NavBar>
                <div className="padding-sm">
                    <div className="fz12 lightgrey-color  margin-bottom-xs">总资产（元）</div>
                    <div><strong className="fz22">121982001.89</strong></div>
                </div>
                <Flex className="border-top">
                    <Flex.Item className="padding-sm border-right">
                        <div className="fz12 lightgrey-color">可用余额</div>
                        <div className="fz16 margin-top-xs"><strong>1219001.89</strong></div>
                    </Flex.Item>
                    <Flex.Item className="padding-sm">
                        <div className="fz12 lightgrey-color">冻结金额</div>
                        <div className="fz16 margin-top-xs"><strong>1219001.89</strong></div>
                    </Flex.Item>
                </Flex>
                <Flex className="border-top">
                    <Flex.Item className="padding-sm border-right">
                        <div className="fz12 lightgrey-color">待收本金</div>
                        <div className="fz16 margin-top-xs"><strong>1219001.89</strong></div>
                    </Flex.Item>
                    <Flex.Item className="padding-sm">
                        <div className="fz12 lightgrey-color">待收收益</div>
                        <div className="fz16 margin-top-xs"><strong>1219001.89</strong></div>
                    </Flex.Item>
                </Flex>
                <WhiteSpace className="bg-body" size="sm" />
                <div className="padding-sm">
                    <div className="fz12 lightgrey-color  margin-bottom-xs">累计收益（元）</div>
                    <div><strong className="fz22 red-color">+121982001.89</strong></div>
                </div>
                <div className="padding-sm padding-bottom-xl border-top">
                    <div className="fz12 lightgrey-color  margin-bottom-xs">收益曲线</div>
                    <div className="line">
                        <Chart height={280} data={data} scale={cols} padding={[ 'auto', 'auto', 'auto', 40]} forceFit>
                            <Axis name="month" line={{ stroke: '#666',lineWidth: 2}} tickLine={{lineWidth: 0}}  />
                            <Axis name="value" />
                            <Tooltip crosshairs={{type : "y"}}/>
                            <Geom type="line" position="month*value" size={2} style={{ stroke: '#F96142'}}/>
                            <Geom type='point' position="month*value" size={4} shape={'circle'} style={{ stroke: '#fff', lineWidth: 1,fill:'#F96142'}} />
                          </Chart>
                    </div>
                </div>
                <WhiteSpace className="bg-body" size="xl" />
            </div>
        )
    }
}