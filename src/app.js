'use strict'

import ReactDOM from 'react-dom'
import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import HeaderExample from './components/header.js'

ReactDOM.render(
        <Router>
            <div>
                <HeaderExample title="情报特工"></HeaderExample>
            </div>
        </Router>,
     document.getElementById('app')
)
