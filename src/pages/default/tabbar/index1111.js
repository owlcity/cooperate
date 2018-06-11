import React from 'react';
import { TabBar } from 'antd-mobile';
import Lend from '@/pages/default/lend';
import Asset from '@/pages/account/asset';
import Mine from '@/pages/account/mine';
import { Modal,Button } from 'antd-mobile';

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

export default class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedTab: 'lendTab',
          show: false, //红包弹出
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
  render() {
    return (
      <div className="tabbar" >
        <TabBar
          unselectedTintColor="#B3B3B3"
          tintColor="#FFC800 "
          barTintColor="#FFF"
        >
          <TabBar.Item
            title="出借"
            key="出借"
            icon={<div className="tab-icon1 tab-icon" />}
            selectedIcon={<div className="tab-on-icon1 tab-icon" />}
            selected={this.state.selectedTab === 'lendTab'}
            badge={'new'}
            onPress={() => {
              this.setState({
                selectedTab: 'lendTab',
              });
            }}
          >
              <Lend />
          </TabBar.Item>
          <TabBar.Item
          title="资产"
            key="资产"
            icon={<div className="tab-icon2 tab-icon" />}
            selectedIcon={<div className="tab-on-icon2 tab-icon" />}
            selected={this.state.selectedTab === 'assetTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'assetTab',
                show: true
              });
            }}
          >
            <Asset />
          </TabBar.Item>
          <TabBar.Item
            icon={<div className="tab-icon3 tab-icon" />}
            selectedIcon={<div className="tab-on-icon3 tab-icon" />}
            title="我的"
            key="我的"
            selected={this.state.selectedTab === 'mineTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'mineTab',
              });
            }}
          >
            <Mine />
          </TabBar.Item>
        </TabBar>

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

      </div>
    );
  }
}

