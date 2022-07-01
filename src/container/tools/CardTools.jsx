import Image from "next/image";
import Link from "next/link";
import data from "./data";

export default function CardTools() {
	return (
		<>
			{data.map((item, index) => {
				return (
					<div className="card-children__primary" key={index}>
						<div className="flex flex-row justify-start">
							<Image
								className="h-auto"
								src={item.imgSrc}
								alt={item.alt}
								width={50}
								height={50}
							/>
						</div>
						<h4 className="card-children__text mt-4">{item.title}</h4>
						<h4 className="card-children__subtext mt-4">{item.description}</h4>
						<Link href={item.link} key={index}>
							<button
								className="card-children-button-disabled sm:mt-8 mt-6"
								disabled
							>
								Coming soon
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="transition-all transform opacity-50 group-hover:opacity-100 group-hover:translate-x-1"
								>
									<path
										d="M17.5 9.99996L2.5 9.99996M11.6667 4.16663L17.5 9.99996L11.6667 4.16663ZM17.5 9.99996L11.6667 15.8333L17.5 9.99996Z"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="stroke-current"
									></path>
								</svg>
							</button>
						</Link>
					</div>
				);
			})}
		</>
	);
}
