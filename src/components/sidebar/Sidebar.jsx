import Link from "next/link";
import { FaArrowAltCircleLeft } from "react-icons/fa";

export default function Sidebar() {
	return (
		<aside className="w-fit pt-40" aria-label="Sidebar">
			<Link href="/">
				<div className="flex items-center hover:text-primary">
					<FaArrowAltCircleLeft className="text-secondary text-xl" />
					<p className="text-secondary font-bold text-xl ml-2">Go Back</p>
				</div>
			</Link>
		</aside>
	);
}
