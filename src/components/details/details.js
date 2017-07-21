import React, { Component } from 'react'
import './details.scss'
import { bRandom, dateformat } from '../../lib/util'
class NewsDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {}
        }
    }
    componentWillMount() {
        var search = window.location.search;
        axios({
            method: 'GET',
            url: 'http://api.clramw.top:8080/api/detail',
            params: {
                objectId: search.split('=')[1]
            }
        })
        .then((data)=> {
             this.setState({
                 item: data.data || {}
             })
            
        })
    }
    render() {
        return (
            <div>
                <div className="news_wrap">
                    <h1 className="news_title">{ this.state.item.title }</h1>
                    <div className="news_notice">
                        <span>{this.state.item.author || 'author'}</span>
                        <span>{dateformat(new Date(this.state.item.date)) || '2017-04-17'}</span>
                        <span>阅读{ this.state.item.wTime || bRandom(300, 400)}次</span>
                    </div>
                    <div className="news_img_wrap">
                        <img src= { this.state.item.image} alt="" className="news_img" />
                    </div>
                    <div className="news_cont" dangerouslySetInnerHTML={{__html: this.state.item.content}}>
                    </div>
                </div>
                <hr />
                <div className="url">源地址：<a href={ this.state.item.originalUrl}>{ this.state.item.originalUrl}</a></div>
            </div>
        )
    }
}

export default NewsDetail;