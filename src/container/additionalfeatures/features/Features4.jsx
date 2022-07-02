import Image from "next/image";
import Hero from "../images/CoupleFeatures.svg";

export default function Features4() {
	return (
		<div className="card-children__onPrimary">
			<div className="flex flex-row justify-center">
				<Image className="h-full w-full" src={Hero} alt="Couple Features" />
			</div>
			<h4 className="sm:text-left text-center font-bold text-onPrimaryContainer text-2xl mt-6">
				Couple Features
			</h4>
			<p className="text-left font-[300] text-onPrimaryContainer text-base mt-4">
				<b className="font-[500] ">
					We know, it&apos;s a different game when managing finance with our
					spouse.
				</b>{" "}
				But it will become enjoyable experience with the right tools in your
				hand.
			</p>
		</div>
	);
}
