import Navbar from "../../components/navbar/Navbar";
import { Widget } from "@typeform/embed-react";
import { useRouter } from "next/router";
import Head from "next/head";

const Typeform = ({ wa }) => {
	return (
		<Widget
			id="PZR271ql"
			style={{ width: "100%", height: "100%" }}
			hidden={{
				index: "1",
				wa: `${wa}`,
			}}
			className="my-form"
		/>
	);
};

export default function Index() {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>Sign up for Kudoku&apos;s waiting list</title>
			</Head>
			<div className="flex flex-col h-full w-full font-inter">
				<div className="flex flex-col h-screen w-full">
					<Navbar />
					<Typeform wa={router.query.wa} />
				</div>
			</div>
		</>
	);
}
