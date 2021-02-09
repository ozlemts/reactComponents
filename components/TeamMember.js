import React, { useState } from "react";

export const TeamMember = (props) => {

	const teamData = [{
		id: 1,
		name: 'Burak Sevindi',
		img_src: 'name 1',
		share: 40
	}, {
		id: 2,
		name: 'Özlem TS',
		label: 'name 2',
		share: 40
	}, {
		id: 3,
		name: 'Mert Sevindi',
		label: 'name 3',
		share: 40
	}];

	return (
		<div className="box">
			<img className="h-3" src='/ok.svg'/>
		</div>
	);
};

export default TeamMember;
