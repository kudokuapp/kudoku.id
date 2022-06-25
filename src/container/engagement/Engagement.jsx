import EngagementL from "./EngagementL";
import EngagementR from "./EngagementR";

export default function Engagement() {
	return (
		<section className="lg:m-6 grid md:grid-cols-3 md:gap-4 h-max">
			<EngagementL />
			<EngagementR />
		</section>
	);
}
