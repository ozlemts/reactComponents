import Head from "next/head";
import Navbar from '../components/Navbar.js';
import EditBox from "../components/EditBox";
import Footer from "../components/Footer";
import CustomInput from "../components/CustomInput";
import SelectBox from "../components/SelectBox";
import RadioButton from "../components/RadioButton";
import TeamMemberEditor from "../components/TeamMemberEditor";
import ImageButton from "../components/ImageButton";
import Layout from "../components/Layout";

const Index = () => {
	return (

		<Layout darkMode="true">
			<Head>
				<title>StartupDeal</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar/>
			<div className="container mb-2">
				<div className="box-container-300">
					<div className="box">
						<div className="d-flex justify-content-between align-items-center">
							<div className="w-75 mr-2">
								<CustomInput label="Company Name"/>
								<CustomInput label="Website"/>
							</div>
							<ImageButton/>
						</div>
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
					<div className="box">
						<TeamMemberEditor/>
					</div>
				</div>
			</div>
			<Footer/>
		</Layout>

	);
}
export default Index;
