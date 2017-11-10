import React, { Component } from 'react';

import axios from 'axios'
import Rest from './Rest'
import '../css/merchant.css'

class Merchant extends Component {
  constructor(props){
    super(props)
    this.state = {
      merchantList:[],
      isLoading: false
    }
  }
  render() {
    return (
      <div className="merchant">
        {
          this.state.merchantList.map((item,index)=>{
            return <Rest key={index} rest={item}></Rest>
          })
        }
      </div>
    );
  }

  getMerchant(){
    this.setState({
      isLoading: true
    })
    axios.get('/restapi/shopping/restaurants?extras%5B%5D=activities&geohash=wqzbnxy2pt4&latitude=38.01135&limit=24&longitude=112.44299&terminal=web&offset='+this.state.merchantList.length)
    .then(res=>{
      console.log(res.data);

      
      this.setState(prevState=>{
        return {
          merchantList: prevState.merchantList.concat(res.data),
          isLoading: false
        } 
      })
    })
  }

  componentDidMount() {
    this.getMerchant();
    window.onscroll = ()=>{
      var bodyH = document.body.clientHeight;
      var windowH = document.documentElement.clientHeight;
      var scrollTop = document.scrollingElement.scrollTop;
      if(windowH+scrollTop > bodyH - 60){
        if(!this.state.isLoading){
          this.getMerchant()
        }
      }
    }
    
    
  }
}

export default Merchant;


// https://www.ele.me/restapi/shopping/restaurants?extras%5B%5D=activities&geohash=wqzbnxy2pt4&latitude=38.01135&limit=24&longitude=112.44299&offset=0&terminal=web