import AllFeature from "../components/sections/all-feature/AllFeature";
import Explanation from "../components/sections/explanation/Explanation";
import FinansialCheck from "../components/sections/finansial-check/FinansialCheck";
import RegisterKudoku from "../components/sections/register/RegisterKudoku";
import Tools from "../components/sections/tools/tools";
import Swiper from "../components/sections/swipe-feature/Swiper";
import items from "../core/mock/swiper";
// Yang bener dari sini nanti
import Head from "next/head";
import Navbar from "../components/navbar/Navbar";
import Team from "../container/team/Team";
import Engagement from "../container/engagement/Engagement";
import Footer from "../components/footer/Footer";

export default function Index() {
	return (
		<>
			<Head>
				<link rel="manifest" href="/manifest.json" />
				<title>Kudoku - Start Your Finance Journey</title>
			</Head>

			<main className="flex flex-col h-full w-full font-inter">
				<div className="flex flex-col h-screen w-full">
					<Navbar />
					<RegisterKudoku />
					<Explanation />
					<AllFeature />
					<Swiper items={items} />
					<FinansialCheck />
					<Tools />
					<Team />
					<Engagement />
					<Footer />
				</div>
			</main>
		</>
	);
}
