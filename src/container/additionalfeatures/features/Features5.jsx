import Image from "next/image";
import Hero from "../images/MultiBank.svg";

export default function Features5() {
	return (
		<div className="card-children__onPrimary">
			<div className="flex flex-row justify-center">
				<Image
					className="h-full w-full"
					src={Hero}
					alt="In-App multi payment"
				/>
			</div>
			<h4 className="sm:text-left text-center font-bold text-onPrimaryContainer text-2xl mt-6">
				In-App multi payment
			</h4>
			<p className="text-left font-[300] text-onPrimaryContainer text-base mt-4">
				<b className="font-[500] ">
					Choosing which one of financial accounts for paying takes time.
				</b>{" "}
				Kudoku let you make payment only from one app using balance from your
				financial accounts.
			</p>
		</div>
	);
}
