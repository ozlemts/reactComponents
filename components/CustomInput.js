import React, { useState } from "react";

export const CustomInput = (props) => {


	return (
		<div className="custom-input mb-1">
			<div className = "custom-label">
				{props.label}
			</div>
			<input type="text" className="w-full"></input>
		</div>
	);
};

export default CustomInput;

