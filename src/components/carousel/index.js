/**
 * Created by zk on 2018/4/11
 */
import React from 'react';
import { Carousel } from 'antd-mobile';
import './index.less';

export default class ImgCarousel extends React.Component {
  state = {
    data: [
        'AiyWuByWklrrUDlFignR.png',
        'AiyWuByWklrrUDlFignR.png', 
        'AiyWuByWklrrUDlFignR.png'
    ],
    imgHeight: 176,
    slideIndex: 0,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: [
        'AiyWuByWklrrUDlFignR.png',
        'TekJlZRVCjLFexlOCuWn.png', 
        'IJOtIlfsYdTyaDTRVrLI.png'
        ],
      });
    }, 100);
  }
  render() {
    return (
        <Carousel
          autoplay
          infinite
          autoplayInterval={8000}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://m.jylc168.com/"
            >
              <img
                className="carousel-img"
                src={`https://zos.alipayobjects.com/rmsportal/${val}`}
                alt=""
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
        
    );
  }
}