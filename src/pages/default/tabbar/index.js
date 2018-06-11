import React from 'react';
import { Link } from 'react-router-dom';
import { Flex } from 'antd-mobile';



export default class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedTab: 'lendTab',
          show: false, //红包弹出
        };
    }

  render() {
    return (
      <div className="u-tab">
          <Flex align="baseline" justify="center">
            <Flex.Item className="u-tab-on">
              <Link to="/index">
                <div className="tab-icon1 tab-icon">
                </div>
                <div className="u-tab-text">出借</div>
              </Link>
            </Flex.Item>
            <Flex.Item>
              <Link to="/account/asset">
                <div className="tab-icon2 tab-icon">
                </div>
                <div className="u-tab-text">资产</div>
              </Link>
            </Flex.Item>
            <Flex.Item>
              <Link to="/account/mine">
                <div className="tab-icon3 tab-icon">
                </div>
                <div className="u-tab-text">我的</div>
              </Link>
            </Flex.Item>
          </Flex>
      </div>
    );
  }
}

