import AllFeature from "../components/sections/all-feature/AllFeature";
import Explanation from "../components/sections/explanation/Explanation";
import FinansialCheck from "../components/sections/finansial-check/FinansialCheck";
import RegisterKudoku from "../components/sections/register/RegisterKudoku";
import Team from "../components/sections/team/Team";
import Tools from "../components/sections/tools/tools";
import Engagement2 from "../components/sections/engagement/Engagement";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Engagement from "../container/Engagement/Engagement";

export default function Index() {
	return (
		<div className="flex flex-col h-full w-full font-inter">
			<div className="flex flex-col h-screen w-full">
				<Navbar />
				<RegisterKudoku />
				<Explanation />
				<AllFeature />
				{/* <Swiper items={items} /> */}
				<FinansialCheck />
				<Tools />
				<Team />
				<Engagement2 />
				{/* <Engagement /> */}
				<Footer />
			</div>
		</div>
	);
}
