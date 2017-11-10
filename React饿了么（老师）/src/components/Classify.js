import React, { Component } from 'react';
import '../css/classify.css'

class Classify extends Component {
  render() {
    return (
      <div className="classify">
        <span className="name">商家分类：</span>
        <ul className="items">
          <li className="active">全部商家</li>
          <li>美食</li>
          <li>快餐便当</li>
          <li>特色菜系</li>
          <li>异国料理</li>
          <li>小吃夜宵</li>
          <li>甜品饮品</li>
          <li>果蔬生鲜</li>
          <li>商店超市</li>
          <li>浪漫鲜花</li>
          <li>医药健康</li>
          <li>早餐</li>
          <li>午餐</li>
          <li>下午茶</li>
          <li>晚餐</li>
          <li>夜宵</li>
        </ul>
      </div>
    );
  }
  
}

export default Classify;
