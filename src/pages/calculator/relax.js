/**
 * Created by zk on 2018/4/19
 */
import React from 'react';
import { Link } from 'react-router-dom';

import { NavBar,Icon,WhiteSpace,PickerView } from 'antd-mobile';

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
    },
  ]
];
export default class Calculator extends React.Component{
    state = {
        value: null,
    }
    onChange = (value) => {
        console.log(value);
        this.setState({
          value,
        });
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
                    <div className="fz12 lightgrey-color">借款期限</div>
                    <PickerView
                        onChange={this.onChange}
                        value={this.state.value}
                        data={days}
                        cols={110}
                        cascade={false}
                      />
                    <div className="fz12 lightgrey-color border-top padding-vertical-sm">投资金额</div>
                    <div className="fz32 black-color margin-top-xs">
                        1000
                    </div>
                </div>

            </div>
        )
    }
}