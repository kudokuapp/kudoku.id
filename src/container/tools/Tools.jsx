import CardTools from "./CardTools";

export default function Tools() {
	return (
		<section className="h-max lg:mx-6 md:mb-16 mb-8">
			<div className="card-main bg-onPrimary lg:px-16 lg:py-14 sm:px-12 sm:py-10 px-8 py-8">
				<div>
					<h3 className="text-left text-primary sm:text-4xl text-3xl font-bold">
						Curious about your financial situation?
					</h3>
					<h4 className="text-onPrimaryContainer font-base text-left sm:text-2xl text-xl mt-4">
						Try one of our free tools below!
					</h4>
				</div>

				<div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-8 grid-cols-1 gap-4 mt-10">
					<CardTools />
				</div>
			</div>
		</section>
	);
}
