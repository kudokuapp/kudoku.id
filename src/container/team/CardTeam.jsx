import Image from "next/image";
import data from "./data";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CardTeam() {
	useEffect(() => {
		(async function () {
			const cal = await getCalApi();
			cal("ui", { styles: { branding: { brandColor: "#2c5ea8" } } });
		})();
	}, []);

	return (
		<>
			{data.map((item, index) => {
				return (
					<button
						className="team-card"
						key={index}
						data-cal-link={item.dataCalLink}
					>
						<div className="team-card__image">
							<Image
								className="rounded-full"
								src={item.imgSrc}
								alt={item.alt}
							/>
						</div>
						<div>
							<h4 className="team-card__text font-bold md:mt-4 mt-0">
								{item.title}
							</h4>
							<h4 className="team-card__text font-light mt-1">{item.name}</h4>
						</div>
					</button>
				);
			})}
		</>
	);
}
