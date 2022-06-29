import Image from "next/image";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
// import privacy from "/public/images/privacy.png"

export default function Index() {
	return (
		<div className="flex md:flex-none">
			<div className="w-0 lg:w-1/6 md:w-1/6 scale-0 sm:scale-100">
				<Sidebar />
			</div>
			<div className="w-screen sm:w-5/6">
				<Navbar />
				<div className="my-8"></div>
				{/* <Image src={privacy} className="w-100 h-auto" alt="" /> */}
			</div>
		</div>
	);
}
