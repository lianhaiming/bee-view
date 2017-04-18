import React, { Component } from 'react'
import './lists.scss'

class ListsItem extends Component {
    render() {
        let lists = this.props.listsItem || [];
        console.log(lists)
        return (
            <section className="lists">{
                lists.map((item) =>
                    <div className="lists_item" key={item.key}>
                        <img src="../../assets/logo.jpg" alt="item1" className="item_img" />
                        <div className="item_r">
                            <h1 className="item_r_title">{ item.title }</h1>
                            <p className="item_r_content">{ item.content }</p>
                            <div className="item_r_notice">
                                <span>{item.author || '小蜜蜂'}</span>
                                <span>{item.date || '2017-04-10'}</span>
                                <span>阅读{item.wTime ||(300 +  Math.round(Math.random())*33)}次</span>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        )
    }
}

export default ListsItem;