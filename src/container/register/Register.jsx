import Image from "next/image";
import Placeholder from "./Placeholder";
import Footer from "./Footer";
import HeroImage from "./images/HeroImage.svg";

export default function Register() {
	return (
		<section className=" h-max lg:mx-6 md:mb-16 mb-8 mt-8">
			<div className="grid md:grid-cols-2 sm:gap-0 gap-6 card-main bg-onPrimary lg:px-16 lg:py-14 sm:px-12 sm:py-10 px-4 py-6">
				<div className="sm:mt-6">
					<h1 className="sm:text-4xl text-3xl font-bold text-primary">
						Having full control of your personal finance is not hard.{" "}
						<span className="text-secondary">
							You only need one app to do that for you.
						</span>
					</h1>
					<div className="sm:my-16 my-8">
						<Placeholder />
					</div>
				</div>
				<div className="order-last sm:mt-0 mt-8">
					<Footer />
				</div>

				<Image
					src={HeroImage}
					alt="Hero Image Kudoku"
					className="w-full h-auto"
				/>
			</div>
		</section>
	);
}
