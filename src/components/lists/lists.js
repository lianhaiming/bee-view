import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom'
import './lists.scss'
import { bRandom, dateformat } from '../../lib/util'
class ListsItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listsItem: []
        }
    }
    componentWillMount() {
        axios({
            method: 'GET',
            url: 'http://api.clramw.top:20200/api/lists'
        })
        .then((data)=> {
            // console.log(data);
            let results = data.data.results;
            // console.log(results)
            this.setState({
                listsItem: results
            })
        })
    }
    render() {
        let lists = this.state.listsItem || [];
        return (
            <section className="lists">{
                lists.map((item, index) =>
                    <div className="lists_item" key={item.objectId}>
                        <Link to={`/detail?item=${item.objectId}`}>
                            <img src={item.image} alt="item1" className="item_img" />
                            <div className="item_r">
                                <h1 className="item_r_title">{item.title}</h1>
                                <p className="item_r_content" dangerouslySetInnerHTML={{__html: item.content.substring(0,20)+ '...'}}></p>
                                <div className="item_r_notice">
                                    <span>{item.author || '小蜜蜂'}</span>
                                    <span>{dateformat(new Date(item.date), 'yyyy-MM-dd') || '2017-04-10'}</span>
                                    <span>阅读{item.wTime || bRandom(300, 333)}次</span>
                                </div>
                            </div>
                        </Link>
                    </div>

                )}
            </section>
        )
    }
}

export default ListsItem;