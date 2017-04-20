import React, { Component } from 'react'
import './details.scss'

class NewsDetail extends Component {
    render() {
        return (
            <div>
                <div className="news_wrap">
                    <h1 className="news_title">{ item.title }</h1>
                    <div className="news_notice">
                        <span>{item.author || 'author'}</span>
                        <span>{item.date || '2017-04-17'}</span>
                        <span>阅读{ item.wTime || '300' }次</span>
                    </div>
                    <div className="news_img_wrap">
                        <img src= { item.image || 'http://image.sike.news.cn/uploads/2017/04/2017-04-0568.jpg'} alt="" className="news_img" />
                    </div>
                    <p className="news_cont">
                        { item.content }
                    </p>
                </div>
                <hr />
                <div className="url">源地址：<a href={ item.originalUrl}>{ item.originalUrl}</a></div>
            </div>
        )
    }
}

export default NewsDetail;