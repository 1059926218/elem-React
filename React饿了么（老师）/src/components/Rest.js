import React, { Component } from 'react';
import '../css/rest.css'

class Rest extends Component {
  constructor(props){
    super(props)

    this.timeFormat = this.timeFormat.bind(this);
  }
  
  render() {
    return (
      <a className="rest">
        <div className="img">
          <img src={this.isImgHash(this.props.rest.image_path)} alt=""/>
          <p ref="time">{this.timeFormat(this.props.rest.order_lead_time)} 分钟</p>
        </div>
        <div className="info">
          <h2>{this.props.rest.name}</h2>
          <div>
            <div className="starrating icon-star">
              <span ref="star" className="icon-star"></span>
            </div>
            <span> 月销售{this.props.rest.recent_order_num}单</span>
          </div>
          <p>{this.props.rest.piecewise_agent_fee.tips}</p>
        </div>
      </a>
    );
  }

  componentDidMount() {
    this.refs.star.style.width = 100*this.props.rest.rating/5 + '%';
    if (this.refs.time.innerHTML.indexOf('+') >= 0) {
      this.refs.time.style.color = 'red';
    } else {
      this.refs.time.style.color = 'black';
    }
        
  }
  
  // 分割图片url
  isImgHash(imgHash){
    if(!imgHash) return '';
    var s1 = imgHash.substr(0,1);
    var s2 = imgHash.substr(1,2);
    var s3 = imgHash.substr(3);
    var s4 = imgHash.substr(32);
    return 'http://fuss10.elemecdn.com'+'/'+s1+'/'+s2+'/'+s3+'.'+s4;
  }
  // 时间处理
  timeFormat(time){
    if (time > 45) {
      return '45+';
    } else {
      return time;
    }
  }
  
}

export default Rest;