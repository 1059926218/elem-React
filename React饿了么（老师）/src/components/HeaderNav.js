import React, { Component } from 'react';
import '../css/header-nav.css'

class HeaderNav extends Component {
  render() {
    return (
      <div className="header-nav">
        <header>
          <div className="container">
            <nav>
              <a href="/" className="logo">饿了么</a>
              <a href="/" className="active">首页</a>
              <a href="/">我的订单</a>
              <a href="/">加盟合作</a>
            </nav>
          </div>
        </header>
      </div>
    );
  }
  
}

export default HeaderNav;
