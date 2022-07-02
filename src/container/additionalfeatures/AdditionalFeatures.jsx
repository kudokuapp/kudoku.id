import Features1 from "./features/Features1";
import Features2 from "./features/Features2";
import Features3 from "./features/Features3";
import Features4 from "./features/Features4";
import Features5 from "./features/Features5";
import Features6 from "./features/Features6";

export default function AdditionalFeatures() {
	return (
		<section className="h-max lg:mx-6 md:mb-16 mb-8">
			<div className="card-main bg-primary lg:px-16 lg:py-14 sm:px-12 sm:py-10 px-8 py-8">
				<div>
					<h3 className="text-left text-onPrimary sm:text-4xl text-3xl font-bold">
						Kudoku has the features.{" "}
						<span className="text-secondaryContainer">
							Both familiar and new.
						</span>
					</h3>
				</div>
				<div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-8 grid-cols-1 gap-4 mt-10">
					<Features1 />
					<Features2 />
					<Features3 />
					<Features4 />
					<Features5 />
					<Features6 />
				</div>
			</div>
		</section>
	);
}
