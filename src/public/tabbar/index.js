import React from 'react';
import { TabBar } from 'antd-mobile';
import Lend from '@/pages/lend';
import Asset from '@/pages/asset';
import Mine from '@/pages/mine';

// 图片导出引用
// import aaa from '../../assets/images/tabbar/lend_1.png';
// <img src={aaa} />

export default class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedTab: 'lendTab',
        };
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
      </div>
    );
  }
}

