import React , { Component }from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import test from '../../assets/300.png';
class HeaderExample extends Component {
    render() {
        const {title} = this.props;
      return  (
        <Router>
            <div>
            <h2>{title}</h2>
            <img src={test} alt=""/>
            <ul>
                <li><Link to="/">综合情报</Link></li>
                <li><Link to="/fe">前端情报</Link></li>
                <li><Link to="/detail">情报详情</Link></li>
                <li><Link to="/nba">NBA情报</Link></li>
            </ul>

            <Route exact path="/" component={All}/>
            <Route path="/fe" component={Fe}/>
            <Route path="/detail" component={Detail}/>
            <Route path="/nba" component={Nba}/>
            </div>
        </Router>
        )
    }
}

const All = () => (
  <div style={{
      color: 'red'
  }}>
    <h3>综合情报</h3>
  </div>
)
const Fe = () => (
  <div style={{
      color: 'blue'
  }}>
    <h3>前端情报</h3>
  </div>
)
const Detail = () => (
  <div style={{
      color: 'purple'
  }}>
    <h3>情报详情</h3>
  </div>
)
const Nba = () => (
  <div>
    <h3>NBA情报</h3>
  </div>
)


export default HeaderExample