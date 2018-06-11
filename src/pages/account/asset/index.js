/**
 * Created by zk on 2018/4/11
 */
import React from 'react';
import { Link } from 'react-router-dom';
import Calendar from 'components/calendar';
import { WhiteSpace,List,Modal,Button } from 'antd-mobile';
import Tab from '@/pages/default/tabbar';
const Item = List.Item;
const Brief = Item.Brief;

// 对话框
function closest(el, selector) {
  const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}
export default class Asset extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          show: true, //红包弹出
        };
    }
    showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
          [key]: true,
        });
    }
    onClose = key => () => {
        this.setState({
          [key]: false,
          show:false
        });
    }
    onWrapTouchStart = (e) => {
        // fix touch to scroll background page on iOS
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
          return;
        }
        const pNode = closest(e.target, '.am-modal-content');
        if (!pNode) {
          e.preventDefault();
        }
    }
    changeModle(){
      this.setState({
          show:false
        })
    }
    
    render(){
        return(
            <div className="white-bg">
                <div className="yellow-bg padding-vertical padding-bottom-xl tac">
                    <div className="white-color text-shadow">
                        本月待回款
                    </div>
                    <div className="white-color text-shadow fz24 padding-vertical">
                        29102.21
                    </div>
                    <div className="white-color text-shadow">
                        本月已回款 290.21元
                    </div>
                </div>

                <div className="calendar-wrap margin-sm white-bg">
                    <Calendar />
                </div>
                <WhiteSpace className="bg-body" size="sm" />
                <List className="list my-list fz14">
                    <Item multipleLine extra={
                        <div>
                        <Link to="/account/withdraw" >
                            提现
                        </Link>
                        <span className="gray-color margin-horizontal-xs"> | </span>
                        <Link className="orange-color"  to="/account/charge" >
                            充值
                        </Link>
                        </div>
                    }>
                      <span className="gray-color fz12">可用余额</span>
                      <Brief className="bark-color">2018.88</Brief>
                    </Item>
                    
                    <Item arrow="horizontal">
                        <Link to="/account/profit" >
                            <img alt="" src={require("assets/images/icon/asset.png")} />
                            <span className="fz14">待收收益</span>
                        </Link>
                    </Item>
                    <Item arrow="horizontal"  extra={
                        <div className="bark-color">
                            102012.89 <span className="fz12 bark-color">元</span>
                        </div>
                    }>
                        <Link to="/account/total" >
                            <img alt="" src={require("assets/images/icon/asset.png")} />
                            <span className="fz14">总资产</span>
                        </Link>
                    </Item>
                    <Item arrow="horizontal">
                        <img alt="" src={require("assets/images/icon/calendar.png")} />
                        <span className="fz14">回款日历</span>
                    </Item>
                    <Item arrow="horizontal">
                        <Link to="/account/mylend" >
                            <img alt="" src={require("assets/images/icon/lend.png")} />
                            <span className="fz14">我的出借</span>
                        </Link>
                    </Item>
                    <Item arrow="horizontal">
                    <Link to="/account/bill" >
                            <img alt="" src={require("assets/images/icon/bill.png")} />
                            <span className="fz14">我的账单</span>
                        </Link>
                    </Item>
                </List>
                <WhiteSpace className="bg-body" size="lg" />

                <Modal
            visible={this.state.show}
            transparent
            closable={true}
            maskClosable={false}
            onClose={this.onClose('modal')}
            wrapProps={{ onTouchStart: this.onWrapTouchStart }}
          >
            <div style={{ height: 152, overflow: 'scroll' }}>
              <div className="margin-vertical-xs bark-color">
                  本月回款已完成
              </div>
              <div className="fz12 padding-vertical-sm bark-color">
                  本月小囧为您赚了888.88元
              </div>
              <div className="padding-horizontal">
                  <Button className="btn-md margin-top-sm yellow-bg white-color" onClick={this.onClose('modal')}>开启下月回款日历</Button>
              </div>
            </div>
          </Modal>

                <Tab />
            </div>
        )
    }
}