import React, {Component} from 'react';
import LandingNav from '../Components/LandingNav'
import '../styles/Landing.css';
import { Navbar, Nav, NavItem, Jumbotron } from 'react-bootstrap';





class Landing extends Component{
	render(){
	return (
		<div className="landing">
			<LandingNav {...this.props}/>
			<Jumbotron className="landing-jumbo">
				<h1>Riding, <br /> simplified.</h1>
				<p className="landing-text">Share Uber fares to airpots with Northwestern Students, fairly.</p>
			</Jumbotron>
		</div>
		);
	}
}

export default Landing