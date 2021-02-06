import React, { useState } from "react";

export const EditBox = () => {
	const [isEditable, setEditable] = useState("false");
	const [maxChar] = useState(500);
	const [remainedChar, setRemainedChar] = useState(500);
	const [rows] = useState(10);
	const [title] = useState("Product/Service Summary");

	const handleChange = (e) => {
		setRemainedChar(maxChar - e.target.value.length);
	};
	const handleToggle = () => {
		setEditable(!isEditable);
	};


	return (
		<div className="editbox">
			<div className="edit-header" >
				<div className = "editbox-title">
					{title}
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
			<div className={`edit-bottom  ${isEditable ? "d-none" : ""}`}>
				<div className="remained-char">
					{remainedChar}/{maxChar}
				</div>
			</div>
		</div>
	);
};

export default EditBox;

