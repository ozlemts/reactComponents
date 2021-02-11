import React, { useState } from "react";
import TeamMember from "./TeamMember";
import CustomInput from "./CustomInput";
import SelectBox from "./SelectBox";
import ImageButton from "./ImageButton";

export const TeamMemberEditor = (props) => {

	const teamData = [{
		id: 1,
		name: 'Burak Sevindi',
		img_src: '/default-user.png',
		status: 'Founder',
		share: 40
	}, {
		id: 2,
		name: 'Özlem TS',
		img_src: '/default-user.png',
		label: 'name 2',
		status: 'Co-Founder',
		share: 40
	}, {
		id: 3,
		name: 'Mert Sevindi',
		img_src: '/default-user.png',
		label: 'name 3',
		status: 'CTO',
		share: 20
	}];

	return (
		<div>
			<div className="custom-label"> Team Members</div>
			{teamData.map(member => {
				return (
					<TeamMember
						name={member.name}
						status={member.status}
						share={member.share}
						img_src={member.img_src}
					/>
				)
			})}
			<div className="d-flex justify-content-between align-items-center">
				<ImageButton className="h-3"/>
				<div className="w-75 mr-2">
				<CustomInput label="Name Surname" className="w-75"/>
			</div>
			<SelectBox label="Persona"/>
			<CustomInput label="Email"/>
			<CustomInput label="Title"/>
			<SelectBox label="Status"/>
			<CustomInput label="Found Share"/>

		</div>
	);
};

export default TeamMemberEditor;