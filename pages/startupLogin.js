import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SignIn from "../components/SingIn";

 function StartupLogin() {
	return (
		<div>
			<Navbar/>
				<div className="d-flex justify-content-center align-items-center w-full">
					<SignIn/>
				</div>
			<Footer/>
		</div>
	)
}

export default StartupLogin