import CardTools from "./CardTools";

export default function Tools() {
	return (
		<section className="h-max lg:m-6 mt-8">
			<div className="card-main bg-onPrimary">
				<div>
					<h1 className="text-left text-primary text-4xl font-bold">
						Curious about your financial situation?
					</h1>
					<h4 className="text-onPrimaryContainer font-base text-left text-1xl md:text-2xl mt-4">
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
