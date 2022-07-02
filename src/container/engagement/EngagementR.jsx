import Link from "next/link";

const text = `You definitely need to check out @kudokuapp if you want to become more productive in managing your personal finance! You can track your income, expense, assets and liabilities in a single app.`;
const URISafe = encodeURIComponent(text);

const twitterLink = `https://twitter.com/intent/tweet?text=${URISafe}%20https%3A%2F%2Fkudoku.id%3Futm_source%3Dtwitter`;

const waLink = `https://wa.me/send?text=${URISafe}%20https%3A%2F%2Fkudoku.id%3Futm_source%3Dwhatsapp`;

export default function EngagamentR() {
	const handleAnchor = () => {
		var reqId = document.getElementById("placeholder");
		window.scrollTo(0, reqId.offset().top - 85);
	};

	const handleShake = () => {
		var d = document.getElementById("placeholder");
		d.classList.add("shakeit__link");
		setTimeout(() => d.classList.remove("shakeit__link"), 3000);
	};

	return (
		<section className="card-main bg-primary lg:px-16 lg:py-14 sm:px-12 sm:py-10 px-8 py-8">
			<h4 className="engagament__text-rightone text-onPrimary">
				Feels like helping us?
			</h4>
			<h5 className="engagament__text-rightone text-onPrimaryContainer">
				Here are some ways you can
			</h5>
			<ul className="mt-10">
				<li className="mt-3">
					<Link href="" onClick={handleAnchor}>
						<p className="engagement-r__link" onClick={handleShake}>
							Join the wailtlist ~&gt;
						</p>
					</Link>
				</li>
				<li className="mt-3">
					<Link href={twitterLink} passHref>
						<a target="_blank" rel="noopener noreferrer">
							<p className="engagement-r__link">Tweet about us ~&gt;</p>
						</a>
					</Link>
				</li>
				<li className="mt-3">
					<Link href={waLink} passHref>
						<a target="_blank" rel="noopener noreferrer">
							<p className="engagement-r__link">Share us on WhatsApp ~&gt;</p>
						</a>
					</Link>
				</li>
			</ul>
		</section>
	);
}
