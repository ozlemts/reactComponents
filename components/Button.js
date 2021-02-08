import React from 'react';

const Button = ({
					children,
					type,
					size,
					onClick}) => {

	const typeOptions = [
		"btn-primary",
		"btn-secondary",
		"btn-success",
		"btn-danger",
		"btn-warning",
		"btn-disabled",
		"btn-primary-ghost",
		"btn-secondary-ghost"
	];

	const sizeOptions = ["btn-lg", "btn-md", "btn-sm"];

	const checkType = typeOptions.includes(type) ? type : typeOptions[0];
	const checkSize = sizeOptions.includes(size) ? size : sizeOptions[0];

	return (
		<div>
			<button
				className={`btn ${checkType} ${checkSize}`}
				onClick={onClick}
				type={type}
			>{children}</button>
		</div>
	)
}

export default Button