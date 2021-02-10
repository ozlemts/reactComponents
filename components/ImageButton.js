import React, { useState } from "react";

const ImageButton = (props) => {

	const [isShowed, setShowed] = useState(false);

	const showChangeButton = () => {
		setShowed(true);
	};

	const hideChangeButton = () => {
		setShowed(false);
	};

	return (
		<div className="image-button">
			<div
				className="position-relative d-flex justify-content-center align-items-center"
				onMouseOver={showChangeButton}
				onMouseLeave={hideChangeButton}
			>
				<img
					src='/default-logo.png'
					className="w-full"
				/>
				<div className={`position-absolute ${isShowed ? "" : "invisible"}`}>
					<label htmlFor="file-upload"
					>Choose Image</label>
					<input id="file-upload" type="file"/>
				</div>
			</div>
		</div>
	)
}

export default ImageButton;