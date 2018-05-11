/**
 * Created by zk on 2018/4/11
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Flex,Grid,Badge,WhiteSpace } from 'antd-mobile';

const data1 = [
    {
      icon: require('assets/images/icon/mine_icon1.png'),
      link: '',
      text: '每日签到'
    },
    {
      icon: require('assets/images/icon/mine_icon2.png'),
      link: '',
      text: '萌宠'
    },
    {
      icon: require('assets/images/icon/mine_icon3.png'),
      link: '',
      text: '奖品'
    },
    {
      icon: require('assets/images/icon/mine_icon4.png'),
      link: '',
      text: '自动出借'
    },
    {
      icon: require('assets/images/icon/mine_icon5.png'),
      link: '',
      text: '风险评估'
    },
    {
      icon: require('assets/images/icon/mine_icon6.png'),
      link: '',
      text: '好友推荐'
    },
    {
      icon: require('assets/images/icon/mine_icon7.png'),
      link: '',
      text: '任务中心'
    },
    {
      icon: require('assets/images/icon/mine_icon8.png'),
      link: '',
      text: '金币商城'
    },
    {
      icon: require('assets/images/icon/mine_icon9.png'),
      link: '',
      text: '电子签名'
    },
    {
      icon: require('assets/images/icon/mine_icon10.png'),
      link: '/account/bankcard',
      text: '银行卡'
    }
]
const data2 = [
    {
      icon: require('assets/images/icon/mine_logo.png'),
      link: '',
      text: '关于我们'
    },
    {
      icon: require('assets/images/icon/mine_intr.png'),
      link: '',
      text: '产品介绍'
    },
    {
      icon: require('assets/images/icon/mine_policy.png'),
      link: '',
      text: '监管政策'
    },
    {
      icon: require('assets/images/icon/mine_help.png'),
      link: '',
      text: '帮助中心'
    }
]

export default class Mine extends React.Component{
    render(){
        return(
            <div>
                <div className="vulgar-gardient">
                    <div className="padding-sm tar">
                    <Badge dot>
                        <Link to="/account/setting">
                        <img alt="" height="20" src={require('assets/images/icon/set_white.svg')} />
                        </Link>
                        <img className="margin-left-sm" alt="" height="20" src={require('assets/images/icon/mail_white.svg')} />

                        </Badge>
                    </div>
                    <Flex>
                        <div className="flex-center" style={{"width":"80px"}}>
                            <img className="circle" alt="" height="50" src="https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png" />
                        </div>
                        <Flex.Item>
                            <div className="white-color">
                                138****2323
                            </div>
                            <div className="pet-rank">萌宠三级</div>
                        </Flex.Item>
                    </Flex>
                    <div  className="padding-bottom tar">
                        <div className="my-silver">
                            <span>1</span>
                            银币 NO.1-2102
                        </div>
                    </div>
                </div>
                <Flex className="mine-info">
                    <Flex.Item>
                        <div className="">
                            <strong className="fz20">3434343</strong>
                            <span className="fz12">个</span>
                        </div>
                        <div className="fz12 margin-top-xs">金币</div>
                    </Flex.Item>
                    <Flex.Item>
                        <div className="">
                            <strong className="fz20">3434343</strong>
                            <span className="fz12">张</span>
                        </div>
                        <div className="fz12 margin-top-xs">卡券</div>
                    </Flex.Item>
                </Flex>
                <div className="white-bg">
                    <div className="padding-sm tar">
                      <Link to="/account/setting">
                        <img alt="" height="20" src={require('assets/images/icon/set_dark.svg')} />
                        </Link>
                        <img className="margin-left-sm" alt="" height="20" src={require('assets/images/icon/mail_dark.svg')} />
                    </div>
                    <div className="padding padding-top-0 tac">
                        <h2 className="red-color">注册送大礼包</h2>
                        <div className="red-color">携手银行存管 保障资金安全</div>
                        <div className="padding padding-horizontal-xl">
                            <Link to="" className="btn-lg margin-top-sm red-bg" type="warning">登陆/注册</Link>
                        </div>
                    </div>
                </div>
                <Grid data={data1}
                  columnNum={4}
                  hasLine={false}
                  itemStyle={{'borderTop':'1px solid #EAE5E4'}}
                  renderItem={dataItem => (
                    <div className="grid-item am-grid-item-inner-content">
                      <Link to={dataItem.link}>
                        <img src={dataItem.icon} alt="" />
                        <div className="margin-top-xs">
                          <span>{dataItem.text}</span>
                        </div>
                      </Link>
                    </div>
                  )}
                />
                <WhiteSpace size="sm" />
                <Grid data={data2}
                  columnNum={4}
                  hasLine={false}
                  renderItem={dataItem => (
                    <div className="grid-item am-grid-item-inner-content">
                      <img src={dataItem.icon} alt="" />
                      <div className="margin-top-xs">
                        <span>{dataItem.text}</span>
                      </div>
                    </div>
                  )}
                />
                <WhiteSpace size="md" />


            </div>
        )
    }
}