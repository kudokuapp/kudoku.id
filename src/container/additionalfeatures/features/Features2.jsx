import Image from "next/image";
import Hero from "../images/BarChartFinancial.svg";

export default function Features2() {
	return (
		<div className="card-children__onPrimary">
			<div className="flex flex-row justify-center">
				<Image
					className="h-full w-full"
					src={Hero}
					alt="Automated Expense Tracking"
				/>
			</div>
			<h4 className="sm:text-left text-center font-bold text-onPrimaryContainer text-2xl mt-6">
				Automated expense tracking
			</h4>
			<p className="text-left font-[300] text-onPrimaryContainer text-base mt-4">
				<b className="font-[500] ">
					Writing your expenses manually is a daunting task.
				</b>{" "}
				There will be an automated expense tracker available for free by the
				time you connect your financial accounts.
			</p>
		</div>
	);
}
