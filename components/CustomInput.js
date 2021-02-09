import React, { useState } from "react";

export const CustomInput = (props) => {

	const [isEditable, setEditable] = useState(false);

	const handleFocus= (e) => {
		setEditable( true);
	}

	const handleBlur = (e) => {
		console.log( 'Saved:', e.target.value);
		setEditable( false);
	}

	return (
		<div className="custom-input mb-1">
			<div className = "custom-label">
				{props.label}
			</div>
			<input type="text"
				   className={`w-full ${isEditable ? "active-box" : ""} `}
				   placeholder={props.placeholder}
				   onBlur={handleBlur}
				   onFocus={handleFocus}
			>
			</input>
		</div>
	);
};

export default CustomInput;

