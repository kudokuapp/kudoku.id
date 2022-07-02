import Image from "next/image";
import Hero from "../images/FinancialGraph.svg";

export default function Features3() {
	return (
		<div className="card-children__onPrimary">
			<div className="flex flex-row justify-center">
				<Image
					className="h-full w-full"
					src={Hero}
					alt="Personal Financial Insights"
				/>
			</div>
			<h4 className="sm:text-left text-center font-bold text-onPrimaryContainer text-2xl mt-6">
				Personal financial insights
			</h4>
			<p className="text-left font-[300] text-onPrimaryContainer text-base mt-4">
				<b className="font-[500] ">
					Everyone has their own financial situation.
				</b>{" "}
				A financial insights based on how you spend your money will help you
				understand your situation.
			</p>
		</div>
	);
}
