import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'
import { Rate } from 'antd'

import 'antd/dist/antd.css';



class Chat extends Component {
    constructor(props){
        super(props)
        this.timeFormat = this.timeFormat.bind(this);
        
    }
    
    render(){
        // 使用路由时，切换页面会由父组件默认传递过来几个参数在this.props里面
        // this.props.match 存储路由相关内容
        // this.props.match.params 路由传递的参数信息
        console.log(this);
        return (
            <div className="chat">
                <div class="home_shop">
                   {
                        this.props.todolist.map((item,index)=>{
                        return <div key={index} className="one_shop">
                        
                        
                        
						
						{item.image_path.slice(-3) == 'png' && <img src={'http://fuss10.elemecdn.com/'+item.image_path+'.png'} alt="" className="img"/>}
                        {item.image_path.slice(-4) == 'jpeg' && <img src={'http://fuss10.elemecdn.com/'+item.image_path+'.jpeg'} alt="" className="img"/>}
                        <div className="right">
                        <span className="name" > {item.name}</span>
                        <br/>
                        {/* <span className="star">{item.rating}&nbsp;&nbsp;</span> */}
                        {<Rate allowHalf defaultValue={item.rating} />}

                        <br/>
                        <span className="num">月售{item.recent_order_num}单</span> 
                        
                        
                        </div>
                        <br/>
//                      <span className="time" ref="time">{item.order_lead_time} 分钟</span> 
                        <p ref="time" className="time">{this.timeFormat(item.order_lead_time)} 分钟</p>
                        </div>
                        })
                    }
                    
                </div>
            </div>
        )
    }
    
    //分钟数变红处理
//  componentDidMount() {
//	   
//	    if (this.refs.time.innerHTML.indexOf('+') >= 0) {
//	      this.refs.time.style.color = 'red';
//	    } else {
//	      this.refs.time.style.color = 'black';
//	    }
//      
//  }
    // 时间处理
  timeFormat(time){
    if (time > 45) {
      return '45+';
    } else {
      return time;
    }
  }
  
  
}

export default Chat;