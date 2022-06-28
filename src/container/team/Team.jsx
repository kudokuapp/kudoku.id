import CardTeam from "./CardTeam";

export default function Team() {
	return (
		<section className="h-max lg:m-6">
			<div className="card-main bg-primary">
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
						Click the card below to book a time with the founder that suits
						yours.
					</p>
				</div>

				<div className="grid md:grid-cols-3 sm:gap-8 gap-6 justify-items-center">
					<CardTeam />
				</div>
			</div>
		</section>
	);
}
