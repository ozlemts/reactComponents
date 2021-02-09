import React, { useState } from "react";

export const RadioButton = () => {
	const someData = [{
		id: 1,
		name: 'name',
		label: 'name 1'
	}, {
		id: 2,
		name: 'name',
		label: 'name 2'
	}, {
		id: 3,
		name: 'name',
		label: 'name 3'
	}];

	const [checkedOptionId, setcheckedOptionId] = useState(1);

	const handleChange = (e) => {console.log(e.target.id)}

	return (
		<div className="radio-button d-flex">
			{someData.map(option => {
				return (
					<label>
						<input
							type="radio"
							id={option.id}
							name={option.name}
							value={option.label}
							onChange={handleChange}
						/><span>{option.id}</span>
					</label>
				);
			})}
		</div>
	)
}
export default RadioButton




