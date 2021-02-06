
import React from 'react'
import Navbar from '../components/Navbar.js';
import EditBox from "../components/EditBox";
import Footer from "../components/Footer";

const Index = () => {
	return (
		<div>
			<Navbar/>
			<div className="container">
				<div className="box-container-300">
					<div className="box"><EditBox/></div>
					<div className="box">box-2</div>
					<div className="box">box-3</div>
					<div className="box">box-4</div>
				</div>
			</div>
			<Footer/>
		</div>
	);
}
export default Index;
