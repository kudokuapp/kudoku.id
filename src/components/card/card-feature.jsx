import Image from "next/image";
import features from "../../core/mock/features";

const CardFeature = () => {
	return (
		<>
			{features.map((item, index) => {
				return (
					<div
						className="card-finansial-check flex flex-col justify-between"
						key={index}
					>
						<Image
							className="h-auto"
							src={item.imgSrc}
							width={160}
							height={160}
							alt=""
						/>
						<h4 className="text-lg text-left font-bold text-black mt-4">
							{item.title}
						</h4>
						<h4 className="text-md text-left font-light text-black mt-4">
							{item.description}
						</h4>
					</div>
				);
			})}
		</>
	);
};

export default CardFeature;
