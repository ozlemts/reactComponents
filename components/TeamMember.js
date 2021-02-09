import React, { useState } from "react";

export const TeamMember = (props) => {

	return (
		<div className="w-full d-flex justify-content-between align-items-center mb-1">
			<div className="d-flex align-items-center">
				<img className="h-3 mr-2" src={props.img_src}/>
				<div>
					<div>{props.name}</div>
					<div className="text-detail">{props.status}</div>
				</div>
			</div>
			<span className="text-detail" style={
				{fontSize: '1.2rem'}
			}>{props.share} %</span>
		</div>
	);
};

export default TeamMember;