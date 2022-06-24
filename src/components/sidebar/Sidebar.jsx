import Link from "next/link";
import { FaArrowAltCircleLeft } from "react-icons/fa";

export default function Sidebar() {
	return (
		<aside className="w-fit pt-40" aria-label="Sidebar">
			<button className="hover:text-primary cursor-pointer text-secondary text-xl w-max h-max font-bold">
				<Link href="/">
					<div className="flex items-center">
						<FaArrowAltCircleLeft className="" />
						<p className="ml-2">Go Back</p>
					</div>
				</Link>
			</button>
		</aside>
	);
}
