import React, { useState } from "react";

export const EditBox = (props) => {
	const [isEditable, setEditable] = useState(false);
	const [maxChar] = useState(500);
	const [remainedChar, setRemainedChar] = useState(500);
	const [rows] = useState(10);

	const handleChange = (e) => {
		setRemainedChar(maxChar - e.target.value.length);
	};

	const makeEditable = () => {
		setEditable( !isEditable);
	}

	const makeDisabled = () => {
		setEditable( !isEditable);
	}

	return (
		<div className="editbox">
			<div className="custom-label" >
				<div className = "editbox-label">
					{props.label}
				</div>
			</div>
			<textarea
				rows={rows}
				maxLength={maxChar}
				onChange={handleChange}
				onMouseOver={makeEditable}
				onMouseLeave={makeDisabled}
				className={`editbox-textarea ${isEditable ? "text-edit" : ""}`}
			></textarea>
			<div className={`edit-bottom  d-flex justify-content-end text-detail ${isEditable ? "" : "invisible"}`}>
				<i className="remained-char">
					{remainedChar}/{maxChar}
				</i>
			</div>
		</div>
	);
};

export default EditBox;
