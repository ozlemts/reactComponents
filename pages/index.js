import React from 'react';
import Navbar from '../components/Navbar.js';
import EditBox from "../components/EditBox";
import Footer from "../components/Footer";
import CustomInput from "../components/CustomInput";
import SelectBox from "../components/SelectBox";
import RadioButton from "../components/RadioButton";

const Index = () => {
	return (
		<div>
			<Navbar/>
			<div className="container mb-1">
				<div className="box-container-300">
					<div className="box">
						<CustomInput label="Company Name"/>
						<CustomInput label="Website"/>
						<EditBox label="Elevator Pitch" />
						<SelectBox label="Categories"/>
						<SelectBox label="Technologies"/>
						<CustomInput label="Investment Need (USD)"/>
						<SelectBox label="Startup State"/>
						<SelectBox label="Revenue State"/>
						<SelectBox label="Business Model"/>
						<SelectBox label="Revenue Stream"/>
						<SelectBox label="TRL: Technology Readiness Level"/>
						<RadioButton/>
						<SelectBox label="Country"/>
						<SelectBox label="Organization"/>
					</div>
					<div className="box">
						<EditBox label="Product/Service Summary" />
						<EditBox label="Problem" />
						<EditBox label="Solution" />
						<EditBox label="Unique Value Proposition" />
						<CustomInput label="Patent Number"/>
					</div>
					<div className="box">
						<EditBox label="Pricing Strategy" />
						<EditBox label="Customer Segments" />
						<EditBox label="Market Size" />
						<EditBox label="Go-To Market Strategy" />
						<EditBox label="GrowthStrategy" />
						<EditBox label="Competitive Advantage" />
					</div>
					<div className="box">box-4</div>
				</div>
			</div>
			<Footer/>
		</div>
	);
}
export default Index;
