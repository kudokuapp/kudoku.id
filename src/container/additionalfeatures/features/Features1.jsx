import Image from "next/image";
import Hero from "../images/MultiAccount.svg";

export default function Features1() {
	return (
		<div className="card-children__onPrimary">
			<div className="flex flex-row justify-center">
				<Image
					className="w-full h-full"
					src={Hero}
					alt="Multi Account Connectivity"
				/>
			</div>
			<h4 className="sm:text-left text-center font-bold text-onPrimaryContainer text-2xl mt-6">
				Multi account connectivity
			</h4>
			<p className="text-left font-[300] text-onPrimaryContainer text-base mt-4">
				<b className="font-[500] ">
					Tired of controlling your financial in different accounts?
				</b>{" "}
				Connect your Kudoku profile to all your bank accounts and digital
				wallets. Start controlling your personal finance in an easy way.
			</p>
		</div>
	);
}
