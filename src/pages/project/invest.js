/**
 * Created by zk on 2018/4/23
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Flex,List,InputItem,NavBar,Icon,WhiteSpace,Picker,Switch } from 'antd-mobile';
import { createForm } from 'rc-form';
const Item = List.Item;

const cashticket =  [
    {
      label: '100现金券',
      value: '100'
    },
    {
      label: '50现金券',
      value: '50'
    },
    {
      label: '20现金券',
      value: '-10'
    }
];
const cardticket =  [
    {
      label: '0.8加息卡',
      value: '0.8'
    },
    {
      label: '0.2加息卡',
      value: '0.2'
    }
];

class InvestPage extends React.Component{
    render(){
        const { getFieldProps } = this.props.form;
        return(
            <div className="white-bg">
                <NavBar
                  mode="light"
                  icon={<Icon type="left" />}
                  onLeftClick={() => window.history.go(-1)}
                  rightContent={[
                    <Icon key="1" type="ellipsis" />,
                  ]}
                >
                    <span className="fz16">出借金额</span>
                </NavBar>
                <div className="padding-vertical tac">
                    <div className="fz12">协议约定年化收益率</div>
                    <div className="margin-vertical">
                        <strong className="fz32">121.2</strong>
                    </div>
                    <div className="fz12">可获金币<span className="orange-color">121个</span></div>
                </div>
                <WhiteSpace className="bg-body" size="sm" />
                <div className="padding-left-sm">
                    <List className="list" renderHeader={() => '出借金额'}>
                      <InputItem
                        {...getFieldProps('money')}
                        type="number"
                        moneyKeyboardAlign="left"
                        placeholder="1000起借，每份1000"
                        extra={
                            <span className='orange-color'>全部出借</span>
                        }
                        onExtraClick={(a)=>{console.log(a)}}
                      >¥</InputItem>
                    </List>
                    <div className="border-top padding-sm">剩余可出借金额<span className="orange-color">12121元</span></div>
                </div>
                <WhiteSpace className="bg-body" size="sm" />
                <div className="padding-left-sm">
                    <List className="list calculate-input">
                        <Picker data={cashticket} cols={1} {
                        ...getFieldProps('cash')} >
                        < Item arrow="horizontal">现金券</Item>
                        </Picker>
                        <Picker data={cardticket} cols={1} {
                        ...getFieldProps('card')} >
                        < Item arrow="horizontal">加息卡</Item>
                        </Picker>
                        <Item extra="不可用" arrow="horizontal" onClick={() => {}}>加息卡</Item>
                        <Item
                          extra={
                                <Switch 
                                    {...getFieldProps('bag', { initialValue: true, 
                              valuePropName: 'checked' })} 
                                />
                            }
                        >
                        福袋
                        <span className="orange-color fz12 padding-left-xs">抵扣20元</span>
                        </Item>
                    </List>
                </div>
                <div className="padding bg-body">
                    <Icon className="icon padding-right-xs" type="check-circle" size="xxs" color="#6fd35e" />
                    我已同意xxxx
                </div>
                <div className="tip-suggest tac">市场有风险，出借需谨慎</div>
                <div className="padding-sm">
                    <Flex className="calc-loan-btn">
                        <Flex.Item>
                            <div className="orange-color">
                                实际支付
                                <span className="fz18">
                                    ¥ 1000.00
                                </span>
                            </div>
                        </Flex.Item>
                        <div className="flex-center" style={{"width":"100px"}}>
                            <Link to="/project/success"className="orange-bg btn-lg full" type="primary">确认</Link>
                        </div>
                    </Flex>
                </div>

            </div>
        )
    }
}
const Invest = createForm()(InvestPage);
export default Invest;