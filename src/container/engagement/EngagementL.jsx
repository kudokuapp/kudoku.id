import Image from "next/image";
import Link from "next/link";
import socialmedia from "./socialmedia";

export default function EngagementL() {
	return (
		<section className="card-main bg-onPrimary md:col-span-2 lg:px-16 lg:py-14 sm:px-12 sm:py-10 px-8 py-8 h-max">
			<h2 className="engagement__text text-primary">Proudly built in Public</h2>
			<h3 className="engagament__text-secondary sm:mx-16 mx-4">
				Follow our journey building Kudoku in public. We regularly share
				progress, successes and failures so you can learn with us!
			</h3>
			<div className="flex flex-row justify-between sm:mt-16 mt-10">
				{socialmedia.map((item, index) => {
					return (
						<button key={index} className="cursor-pointer w-fit h-fit">
							<Link href={item.link} key={index} passHref>
								<a target="_blank" rel="noopener noreferrer">
									<Image
										src={item.imgSrc}
										width={40}
										height={40}
										alt={item.alt}
										key={index}
										className="hover:fill-secondary"
									/>
								</a>
							</Link>
						</button>
					);
				})}
			</div>
		</section>
	);
}
