import AllFeature from "../components/sections/all-feature/AllFeature";
import Explanation from "../components/sections/explanation/Explanation";
import FinansialCheck from "../components/sections/finansial-check/FinansialCheck";
import RegisterKudoku from "../components/sections/register/RegisterKudoku";
import Team from "../components/sections/team/Team";
import Tools from "../components/sections/tools/tools";
import Engagement2 from "../components/sections/engagement/Engagement";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Head from "next/head";
// import Engagement from "../container/Engagement/Engagement";

const HeadIndex = () => {
	return (
		<Head>
			<meta charSet="utf-8" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0, maximum-scale=1.0, viewport-fit=cover, user-scalable=0"
			/>

			<link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
			<link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
			<link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
			<link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
			<link
				rel="apple-touch-icon"
				sizes="114x114"
				href="/apple-icon-114x114.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="120x120"
				href="/apple-icon-120x120.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="144x144"
				href="/apple-icon-144x144.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="152x152"
				href="/apple-icon-152x152.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/apple-icon-180x180.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="192x192"
				href="/android-icon-192x192.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="96x96"
				href="/favicon-96x96.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/favicon-16x16.png"
			/>
			<link rel="manifest" href="/manifest.json" />
			<meta name="msapplication-TileColor" content="#ffffff" />
			<meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
			<meta name="theme-color" content="#345665" />

			<title>Kudoku - Start Your Finance Journey</title>

			<meta name="title" content="Kudoku - Start Your Finance Journey" />
			<meta
				name="description"
				content="Meet the all-in-one calendar. Schedule time for todos, events, and contacts with joy. Try it for free!"
			/>
			<link rel="canonical" href="https://www.amie.so/" />
			<meta property="fb:app_id" content="" />
			<meta property="fb:pages" content="" />
			<meta property="og:type" content="product" />
			<meta property="og:url" content="https://www.amie.so/" />
			<meta property="og:title" content="Amie - Joyful productivity" />
			<meta
				property="og:description"
				content="Meet the all-in-one calendar. Schedule time for todos, events, and contacts with joy. Try it for free!"
			/>
			<meta property="og:image" content="https://www.amie.so/images/meta.png" />
			<meta name="twitter:card" content="photo" />
			<meta name="twitter:site" content="@tryamie" />
			<meta name="twitter:creator" content="@tryamie" />
			<meta name="twitter:title" content="Amie - Joyful productivity" />
			<meta
				name="twitter:description"
				content="Meet the all-in-one calendar. Schedule time for todos, events, and contacts with joy. Try it for free!"
			/>
			<meta
				name="twitter:image:src"
				content="https://www.amie.so/images/meta.png"
			/>
			<meta itemProp="name" content="Amie - Joyful productivity" />
			<meta
				itemProp="description"
				content="Meet the all-in-one calendar. Schedule time for todos, events, and contacts with joy. Try it for free!"
			/>
			<meta itemProp="image" content="https://www.amie.so/images/meta.png" />
			<meta name="mobile-web-app-capable" content="yes" />
			<meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
			<meta name="next-head-count" content="35" />
		</Head>
	);
};

export default function Index() {
	return (
		<>
			<HeadIndex />
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
		</>
	);
}
