/**
 * Created by zk on 2018/4/19
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Flex,Button,Badge,NavBar,Icon,ListView } from 'antd-mobile';

function MyBody(props) {
  return (
    <div className="am-list-body my-body">
      {props.children}
    </div>
  );
}

const data = [
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: '1售后回租323期',
    deadline: "借款期限：30天",
    rate: '协议约定借款年化利率 7.7%',
    profit: '协议约定预期收益 78元',
    money: '¥ 880000',
    time: '出借时间：2018-02-03'
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: '2售后回租323期',
    deadline: "借款期限：30天",
    rate: '协议约定借款年化利率 7.7%',
    profit: '协议约定预期收益 78元',
    money: '¥ 880000',
    time: '出借时间：2018-02-03'
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: '3售后回租323期',
    deadline: "借款期限：30天",
    rate: '协议约定借款年化利率 7.7%',
    profit: '协议约定预期收益 78元',
    money: '¥ 880000',
    time: '出借时间：2018-02-03'
  },
];
const NUM_SECTIONS = 2;
const NUM_ROWS_PER_SECTION = 1;

const dataBlobs = {};
let sectionIDs = [];
let rowIDs = [];
function genData(pIndex = 0) {
  for (let i = 0; i < NUM_SECTIONS; i++) {
    const ii = (pIndex * NUM_SECTIONS) + i;
    const sectionName = `Section ${ii}`;
    sectionIDs.push(sectionName);
    dataBlobs[sectionName] = sectionName;
    rowIDs[ii] = [];
    console.log(sectionName);

    for (let jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
      const rowName = `S${ii}, R${jj}`;
      rowIDs[ii].push(rowName);
      dataBlobs[rowName] = rowName;
    }
  }
  sectionIDs = [...sectionIDs];
  rowIDs = [...rowIDs];
}


export default class Mylend extends React.Component{
    constructor(props) {
        super(props);
        const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
        const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];

        const dataSource = new ListView.DataSource({
          getRowData,
          getSectionHeaderData: getSectionData,
          rowHasChanged: (row1, row2) => row1 !== row2,
          sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
        });

        this.state = {
          dataSource,
          isLoading: true,
          height: document.documentElement.clientHeight * 3 / 4,
        };
    }
    componentDidMount() {
        // you can scroll to the specified position
        // setTimeout(() => this.lv.scrollTo(0, 120), 800);
        const hei = document.documentElement.clientHeight - ReactDOM.findDOMNode(this.lv).parentNode.offsetTop;
        // simulate initial Ajax
        setTimeout(() => {
          genData();
          this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
            isLoading: false,
            height: hei,
          });
        }, 600);
    }

    render() {
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 8,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED',
        }}
      >
      </div>
    );
    let index = data.length - 1;
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = data.length - 1;
      }
      const obj = data[index--];
      return (
        <div key={rowID} className="list-con">
          <div className="list-con-title">
            <Badge text="暖" hot style={{ marginRight: 10,backgroundColor: '#2181FA',padding: '0 3px' }} />
            <Link to="/project" >
                <strong className="fz14">{obj.title}</strong>
            </Link>
            <div className="tac fr" style={{width:'140px'}}>
                <strong className="fz16">{obj.money}</strong>
            </div>
          </div>
          <Flex className="list-main">
              <Flex.Item className="color-666">
                  <div>{obj.deadline}</div>
                  <div>{obj.rate}</div>
                  <div>{obj.profit}</div>
                  <div>{obj.time}</div>
              </Flex.Item>
              <div className="tac" style={{width:'140px'}}>
                <Button className="yellow-bg btn-sm" type="primary">回款中</Button>
              </div>
          </Flex>
          
        </div>
      );
    };
    return (
      <div className="white-bg">
            <NavBar
              mode="light"
              icon={<Icon type="left" />}
              onLeftClick={() => window.history.go(-1)}
              rightContent={
                <img height='20px' alt="" src={require("assets/images/icon/filter.svg")} />
              }
            >
                <span className="fz16 ">我的出借</span>
            </NavBar>
            <ListView
              ref={el => this.lv = el}
              dataSource={this.state.dataSource}
              renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                {this.state.isLoading ? 'Loading...' : '没有更多了'}
              </div>)}
              // renderSectionHeader={sectionData => (
              //   <div>{`标题渲染长列表属性 ${sectionData.split(' ')[1]}`}</div>
              // )}
              renderBodyComponent={() => <MyBody />}
              renderRow={row}
              renderSeparator={separator}
              style={{
                height: this.state.height,
                overflow: 'auto',
              }}
              pageSize={4}
              onScroll={() => { console.log('scroll'); }}
              scrollRenderAheadDistance={500}
              onEndReached={this.onEndReached}
              onEndReachedThreshold={10}
            />
      </div>
    );
  }
    
}
