import Image from "next/image";
import Link from "next/link";
import socialmedia from "./socialmedia";

export default function EngagementL() {
	return (
		<div className="card-main bg-onPrimary md:col-span-2">
			<div className="">
				<h2 className="engagement__text">Proudly built in Public</h2>
				<h3 className="engagament__text-secondary mx-16">
					Follow our journey building Kudoku in public. We regularly share
					progress, successes and failures so you can learn with us!
				</h3>
			</div>
			<div className="flex flex-row justify-between mt-16">
				{socialmedia.map((item, index) => {
					return (
						<button key={index} className="cursor-pointer w-fit h-fit">
							<Link href={item.link} key={index}>
								<Image
									src={item.imgSrc}
									width={40}
									height={40}
									alt=""
									key={index}
								/>
							</Link>
						</button>
					);
				})}
			</div>
		</div>
	);
}
