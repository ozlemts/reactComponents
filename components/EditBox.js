import React, { useState } from "react";

export const EditBox = (props) => {
	const [isEditable, setEditable] = useState("false");
	const [maxChar] = useState(500);
	const [remainedChar, setRemainedChar] = useState(500);
	const [rows] = useState(10);

	const handleChange = (e) => {
		setRemainedChar(maxChar - e.target.value.length);
	};
	const handleToggle = () => {
		setEditable(!isEditable);
	};

	return (
		<div className="editbox">
			<div className="custom-label" >
				<div className = "editbox-label">
					{props.label}
				</div>
				<div className="edit-action" onClick={handleToggle}>
					<img src={isEditable ? "/edit.svg" : "/ok.svg"} className="h-1">{}</img>
				</div>
			</div>
			<textarea
				disabled={isEditable}
				rows={rows}
				maxLength={maxChar}
				autofocus={isEditable}
				onChange={handleChange}
				className={`editbox-textarea ${isEditable ? "" : "text-edit"}`}
			></textarea>
			<div className={`edit-bottom  d-flex justify-content-end text-detail ${isEditable ? "d-none" : ""}`}>
				<i className="remained-char">
					{remainedChar}/{maxChar}
				</i>
			</div>
		</div>
	);
};

export default EditBox;

