import React, {Component} from 'react'

class Info extends Component {
    render(){
        return (
            <div className="info">
                <p>信息：{this.props.match.url}</p>
            </div>
        )
    }
}

export default Info;