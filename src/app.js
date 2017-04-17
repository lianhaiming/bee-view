'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import {getData} from './lib/ajax'

getData({}, 'https://api.leancloud.cn/1.1/cloudQuery?cql=select * from honey limit 0,20 order by pubUser');
import ListsItem from './components/lists/lists'

ReactDOM.render(
            <div>
                <ListsItem/>
            </div>,
     document.getElementById('app')
)
