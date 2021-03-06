import Furqon from "./cal/Furqon";
import Rizqy from "./cal/Rizqy";
import Aldi from "./cal/Aldi";

export default function Team() {
	return (
		<section className="h-max lg:mx-6 md:mb-16 mb-8">
			<div className="card-main bg-primary lg:px-16 lg:py-14 sm:px-12 sm:py-10 px-8 py-8">
				<h5 className="team__heading">Ask us anything about Kudoku</h5>
				<div className="mt-4">
					<h6 className="team__subheading">
						For you who&apos;re curious enough, choose a time with the founders
						and start asking.
					</h6>
					<h6 className="team__subheading">
						We&apos;re open to{" "}
						<span className="text-errorContainer underline">
							discuss anything
						</span>{" "}
						about this amazing app.
					</h6>
				</div>
				<div className="md:mb-16 sm:mb-12 mb-4 text-center text-secondaryContainer text-sm mt-10">
					<p>
						Click the card below to book a time with the founders that suits
						yours.
					</p>
				</div>

				<div className="grid md:grid-cols-3 sm:gap-8 gap-6 justify-items-center">
					<Furqon />
					<Rizqy />
					<Aldi />
				</div>
			</div>
		</section>
	);
}
