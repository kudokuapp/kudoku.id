import Link from "next/link";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Index() {
	return (
		<div className="flex md:flex-none">
			<div className="w-0 lg:w-1/6 md:w-1/6 scale-0 sm:scale-100">
				<Sidebar />
			</div>
			<div className="w-screen sm:w-5/6">
				<Navbar />
				<div className="bg-white p-14 rounded-3xl drop-shadow-md mt-12 mx-6">
					<h1 className="text-primary text-6xl font-bold mb-12">Imprint</h1>
					<h2 className="text-primary text-3xl font-medium mb-12">
						PT. Kudoku Finansial Indonesia
					</h2>
					<h6 className="text-primary text-2xl">Address</h6>
					<p className="mb-4">
						Bellezza BSA 1st Floor Unit 106, Letjen Soepeno Street, NU/CU:
						004/002, Urban Village: Grogol Utara, Sub-District: Kebayoran Lama,
						District: Jakarta Selatan, Province: DKI Jakarta, Post Code: 12210
					</p>

					<h6 className="text-primary text-2xl">Company Registration Number</h6>
					<p className="mb-4">AHU-0215866.AH.01.11</p>

					<h6 className="text-primary text-2xl">VAT-ID</h6>
					<p className="mb-4">53.534.858.5-013.000</p>

					<h6 className="text-primary text-2xl">Managing Director</h6>
					<p className="mb-4">Furqon Wilogo</p>

					<h6 className="text-primary text-2xl">Managing Commissioner</h6>
					<p className="mb-4">Prof. Dr. dr. Fachmi Idris, M.Kes</p>

					<h6 className="text-primary text-2xl">Company e-mail</h6>
					<Link href="mailto:business@kudoku.id">business@kudoku.id</Link>
				</div>
			</div>
		</div>
	);
}
