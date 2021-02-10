import React, { useState } from "react";

const ImageButton = (props) => {

	const changeLogo = () => {
		console.log('img')
	};

	return (
		<div>
			<div className="position-relative d-flex justify-content-center align-items-center">
				<img
					src='/default-logo.png'
					className="w-full"
					onClick={changeLogo()}
				/>
				<div className="position-absolute">
					<label htmlFor="file-upload">
						<img src="/edit.svg" className="circle-img"/>
					</label>
					<input id="file-upload" type="file"/>
				</div>
			</div>
		</div>
	)
}

export default ImageButton;