import React , { Component }from 'react';
import logoimg from '../../assets/logo.jpg';
import './banner.scss';
class Banner extends Component {
    render() {
      return  (
       		<div className="banner">
       			<div className="logo">
       				<img src={logoimg}/>
       			</div>
       			<p className="title">情报特工<i>@</i></p>
       			<a className="siderbar-icon">Bee<i className="bee"></i></a>
       		</div>
        )
    }
}

export default Banner