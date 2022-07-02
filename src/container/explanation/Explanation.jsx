import ExplanationL from "./ExplanationL";
import ExplanationR from "./ExplanationR";

export default function Explanation() {
	return (
		<section className="h-max lg:mx-6 grid md:grid-cols-2 md:gap-4 gap-8 md:mb-16 mb-8">
			<ExplanationL />
			<ExplanationR />
		</section>
	);
}
