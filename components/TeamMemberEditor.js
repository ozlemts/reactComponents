import React, { useState } from "react";
import TeamMember from "./TeamMember";
import CustomInput from "./CustomInput";
import SelectBox from "./SelectBox";

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
		<div className="">
			<div className="custom-label" > Team Members</div>
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
			<SelectBox label="Investment Need (USD)"/>
			<SelectBox/>
			<SelectBox/>
			<CustomInput/>

		</div>
	);
};

export default TeamMemberEditor;