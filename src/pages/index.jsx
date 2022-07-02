import Head from "next/head";
import Navbar from "../components/navbar/Navbar";
import Register from "../container/register/Register";
import MainFeatures from "../container/mainfeatures/MainFeatures";
import FeaturesPrimary from "../container/featuresprimary/FeaturesPrimary";
import Explanation from "../container/explanation/Explanation";
import AdditionalFeatures from "../container/additionalfeatures/AdditionalFeatures";
import Tools from "../container/tools/Tools";
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

			<main className="flex flex-col h-full w-full">
				<Navbar />
				<Register />
				<Explanation />
				<MainFeatures />
				<FeaturesPrimary />
				<AdditionalFeatures />
				<Tools />
				<Team />
				<Engagement />
				<Footer />
			</main>
		</>
	);
}
