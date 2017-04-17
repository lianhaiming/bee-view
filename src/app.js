'use strict'

import ReactDOM from 'react-dom'
import React from 'react'
import {getData} from './lib/ajax'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

console.log(typeof React.Component)
getData({}, 'https://api.leancloud.cn/1.1/cloudQuery?cql=select * from honey limit 0,20 order by pubUser');
import HeaderExample from './components/header/header.js'

ReactDOM.render(
        <Router>
            <div>
                <HeaderExample title="情报特工"></HeaderExample>
            </div>
        </Router>,
     document.getElementById('app')
)
