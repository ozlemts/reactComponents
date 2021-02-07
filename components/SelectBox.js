import React, { useState } from "react";

const SelectBox = (props) => {

	const [options, setOptions] = useState(["Work", "Home", "school"]);

	const Add = options.map(Add => Add);

	const handleOptionsChange = (e) => {console.log((options[e.target.value]))}
	return (
		<div className="select-box mb-1">
			<div className = "custom-label">
				{props.label}
			</div>
			< select
				onChange={e => handleOptionsChange(e)}
				className="custom-select" >{
					Add.map((address, key) => <option key={key} value={key}>{address}</option>)}
			</select >
		</div>
	)
}

export default SelectBox;
