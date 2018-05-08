/**
 * Created by zk on 2018/4/19
 */
import React from 'react';
import { Link } from 'react-router-dom';

import { NavBar,Icon,WhiteSpace,PickerView,Button,Slider } from 'antd-mobile';

const days = [
  [
    {
      label: '30',
      value: '30',
    },
    {
      label: '90',
      value: '90',
    },
    {
      label: '150',
      value: '150',
    },
    {
      label: '180',
      value: '180',
    },
    {
      label: '360',
      value: '360',
    }
  ]
];
export default class Calculator extends React.Component{
    state = {
        value: 90,
        slideValue: 1000
    }
    slideVal = (name) => {
        return (value) => {
          // console.log( `${name}+${value}`);
          this.setState({
            slideValue : value
          })
        };
    }
    onChange = (value) => {
        console.log(value);
        this.setState({
          value
        });
    }
    componentDidMount(){
        document.querySelector(".am-picker-col-content").style.transform = "translate3d(0px, -68px, 0px)";
    }
    render(){
        return(
            <div className="white-bg">
                <NavBar
                  mode="light"
                  icon={<Icon type="left" />}
                  onLeftClick={() => window.history.go(-1)}
                  rightContent={
                    <Link className="btn-sm yellow-bg padding-horizontal-xs"  to="/calculator/major" >
                            专业版
                     </Link>
                  }
                >
                    <span className="fz16 ">计算器</span>
                </NavBar>
                <div className="margin-lg tac">
                    <div className="fz12 lightgrey-color">协议约定年化收益率</div>
                    <div className="fz32 red-color margin-top-sm">
                        88.87
                    </div>
                </div>

                <WhiteSpace className="bg-body" size="sm" />
                <div className="white-bg padding-sm tac">
                    <div className="fz12 lightgrey-color">借款期限（天）</div>
                    <PickerView
                        onChange={this.onChange}
                        value={this.state.value}
                        data={days}
                        cascade={false}
                      />
                    <div className="fz12 lightgrey-color border-top padding-vertical-sm margin-top">投资金额（元）</div>
                    <div className="fz32 black-color margin-top-xs">
                        {this.state.slideValue}
                    </div>
                    <div className="padding padding-vertical-xl">
                    <Slider
                        defaultValue={1000}
                        min={0}
                        max={10000}
                        step={100}
                        onChange={this.slideVal('change')}
                        onAfterChange={this.slideVal('afterChange')}
                      />
                    </div>
                    <div className="margin-sm margin-bottom-xl">
                        <Button className="btn-lg yellow-bg">
                            按此方案购买
                        </Button>
                    </div>
                </div>

            </div>
        )
    }
}