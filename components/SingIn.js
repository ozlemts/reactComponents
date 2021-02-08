import React, { useState, useEffect } from 'react';
import CustomInput from "./CustomInput";
import Button from "./Button";

const SignIn = () => {
	return (
		<div className="sign-in">
			<div className="box">
				<h5>SIGN IN</h5>
				<CustomInput placeholder="Email"/>
				<CustomInput placeholder="Password"/>
				<Button type="btn-primary">Log in</Button>
			</div>
		</div>
	)
}

export default SignIn