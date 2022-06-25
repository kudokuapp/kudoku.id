import Link from "next/link";

export default function Footer() {
	return (
		<div className="sm:flex justify-between block">
			<ul>
				<li>
					<button className="top-footer__text">
						<Link href="#">Dokupedia</Link>
					</button>
				</li>

				<li>
					<button className="top-footer__text">
						<Link href="#">Why Kudoku?</Link>
					</button>
				</li>
			</ul>
			<ul>
				<li>
					<button className="top-footer__text">
						<Link href="#">Work with us</Link>
					</button>
				</li>
			</ul>
		</div>
	);
}
