import React, { Component } from 'react';
import './App.css';

// npm install react-router-dom --save
// BrowserRouter：浏览器端路由对象
// Route: 路由配置
// Link: 链接
// Redirect：重定向
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import Home from './components/Home'
import Friends from './components/Friends'
import Settings from './components/Settings'
import Chat from './components/Chat'

class App extends Component {
  render() {
    return (
      // 路由配置信息都写在路由对象的标签中
//    <Router>
//      <div className="app">
//        <nav>
//          <Link to="/">首页</Link>
//          <Link to="/friends">好友</Link>
//          <Link to="/settings">设置</Link>
//        </nav>
//        {/* 重定向，pathname：重定向到的路径，state状态； from：原路径 */}
//        <Redirect to={{pathname:'/home',state:{from:'/'}}}></Redirect>
//        
//
//        {/* 配置路由: path:路径； component:匹配的组件 
//        exact: 精确匹配，"/" 只会匹配 "/"；如果不加exact，就会匹配 "/xxx" 这样的路径
//        */}
//        <Route path="/" exact component={Home}></Route>
//        <Route path="/friends" component={Friends}></Route>
//        <Route path="/settings" component={Settings}></Route>
//        {/* 动态路由 */}
//        <Route path="/chat/:name" component={Chat}></Route>
//      </div>
//    </Router>
      <Router>
        <div className="app">
          <div class="a_nav">	
	          <nav>
	            <Link to="/home">首页</Link>
	            <Link to="/friends">加盟订单</Link>
	            <Link to="/settings">我的合作</Link>
	          </nav>
          </div>
          {/* 重定向，pathname：重定向到的路径，state状态； from：原路径 */}
          <Redirect to={{pathname:'/home',state:{from:'/'}}}></Redirect> 


          {/* 配置路由: path:路径； component:匹配的组件 
          exact: 精确匹配，"/" 只会匹配 "/"；如果不加exact，就会匹配 "/xxx" 这样的路径
          exact无论如何都找到"/"
          */}
          <Route path="/home"  component={Home}></Route>
          <Route path="/friends" component={Friends}></Route>
          <Route path="/settings" component={Settings}></Route>
          {/* 动态路由 */}
          <Route path="/chat/:name" component={Chat}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
