import React, {Component} from 'react'
import axios from 'axios'

import Chat from './Chat'



class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            todolist:[],
            image:[]
        }
        
    }
   
    render(){
        return (
            <div className="home">
                <div class="home_sort">
                    <a href="#">商家分类：</a>
                    <a href="">全部商家</a>
                    <a href="">美食</a>
                    <a href="">快餐便当</a>
                    <a href="">特色菜系</a>
                    <a href="">异国料理</a>
                    <a href="">小吃夜宵</a>
                    <a href="">甜品饮品</a>
                    <a href="">果蔬生鲜</a>
                    <a href="">商店超市</a>
                    <a href="">浪漫鲜花</a>
                    <a href="">医药健康</a>
                    <a href="">早餐</a>
                    <a href="">午餐</a>
                    <a href="">下午茶</a>
                    <a href="">晚餐</a>
                    <a href="">夜宵</a>
                </div>
                <Chat  todolist={this.state.todolist}></Chat>
            </div>
        )
    }
    componentDidMount(){
        console.log('将要挂载到dom上');
    }
    componentDidMount() {
        console.log('已经挂载到dom上');

        axios.get('/eleapi/restapi/shopping/restaurants?extras%5B%5D=activities&geohash=wqzbnxy2pt4&latitude=38.01135&limit=24&longitude=112.44299&offset=0&terminal=web').then(res=>{
            console.log(res.data);
            console.log(res.data[0].address);
           
            this.setState(prevState=>{
                return {
                  todolist:res.data ,
                  
                }
            })
        })
    }
}

export default Home;