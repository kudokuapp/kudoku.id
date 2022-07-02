import Image from "next/image";
import Hero from "../images/TransferBanks.svg";

export default function Features6() {
	return (
		<div className="card-children__onPrimary">
			<div className="flex flex-row justify-center">
				<Image
					className="h-full w-full"
					src={Hero}
					alt="Interbank money transfer"
				/>
			</div>
			<h4 className="sm:text-left text-center font-bold text-onPrimaryContainer text-2xl mt-6">
				Interbank money transfer
			</h4>
			<p className="text-left font-[300] text-onPrimaryContainer text-base mt-4">
				<b className="font-[500] ">We all wanted to avoid transfer fees.</b>{" "}
				Kudoku use third party API to help you reduce fees for interbank
				transfer.
			</p>
		</div>
	);
}
