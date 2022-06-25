import Link from "next/link";

export default function BottomFooter() {
	return (
		<div className="sm:flex justify-between items-end sm:mt-14 mt-6 block">
			<div>
				<ul className="flex sm:gap-6 gap-4">
					<li>
						<button className="bottom-footer__text">
							<Link href="/imprint">Imprint</Link>
						</button>
					</li>
					<li>
						<button className="bottom-footer__text">
							<Link href="/terms">Terms of Service</Link>
						</button>
					</li>
					<li>
						<button className="bottom-footer__text">
							<Link href="/privacy">Privacy Policy</Link>
						</button>
					</li>
				</ul>
			</div>
			<div>
				<ul>
					<li>
						<p className="text-onPrimaryContainer sm:mt-0 mt-4">
							2022 PT. Kudoku Finansial Indonesia
						</p>
					</li>
				</ul>
			</div>
		</div>
	);
}
