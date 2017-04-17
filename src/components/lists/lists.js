import React, { Component } from 'react'
import './lists.scss'

class ListsItem extends Component {
    render() {
        return (
            <section>
                <div className="lists_item">
                    <img src="" alt="" className="lists_item_img" />
                    <div>
                        <h1 className="lists_item_title">this is a title</h1>
                        <p className="lists_item_content">Lorem ipsumz dolor sit amet, coantium, velit at tenetur, recusandae animi, illum.</p>
                        <div className="lists_item_notice">
                            <span>author</span>
                            <span>2017-04-17</span>
                            <span>阅读450次</span>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ListsItem;