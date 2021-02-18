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
			{teamData.map((member, i) => {
				return (
					<TeamMember
						key={i}
						name={member.name}
						status={member.status}
						share={member.share}
						img_src={member.img_src}
					/>
				)
			})}
			<div className="d-flex justify-content-between align-items-center">
				<ImageButton/>
				<div className="w-75 ml-2">
					<CustomInput label="Name" className=""/>
					<CustomInput label="Surname" className=""/>
				</div>
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