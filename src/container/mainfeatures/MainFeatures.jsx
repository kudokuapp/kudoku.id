import Image from "next/image";
import data from "./data";

export default function MainFeatures() {
	return (
		<section className="h-max lg:mx-6 md:mb-16 mb-8">
			<div className="card-main bg-onPrimary bg-opacity-70 lg:px-16 lg:py-14 sm:px-12 sm:py-10 px-8 py-8">
				<h2 className="text-left sm:text-4xl text-3xl text-primary font-bold">
					All in one app.{" "}
					<span className="text-onPrimaryContainer break-words">
						So you can focus on achieving your financial independence.
					</span>
				</h2>
				<div className="align-middle self-center flex flex-wrap justify-center gap-2 mt-4">
					{data.map((item, index) => {
						return (
							<Image
								className="w-auto h-auto shadow-md"
								src={item.imgSrc}
								alt={item.alt}
								key={index}
							></Image>
						);
					})}
				</div>
			</div>
		</section>
	);
}
