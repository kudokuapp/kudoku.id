import Image from "next/image";
import tools from "../../core/mock/tools";

const CardTools = () => {
	return (
		<>
			{tools.map((item, index) => {
				return (
					<div className="card-tools flex flex-col justify-between" key={index}>
                        <div className="flex flex-row justify-start">
                            <Image
                                className="h-auto"
                                src={item.imgSrc}
                                width={50}
                                height={50}
                                alt=""
                            />
                        </div>
						<h4 className="text-lg text-left font-bold text-white mt-4">
							{item.title}
						</h4>
						<h4 className="text-md text-left font-light text-white mt-4">
							{item.description}
						</h4>
						<button
							className="text-white w-full bg-neutralOnBackground opacity-50 rounded-md p-2 mt-2"
							disabled
						>
							Coming soon
						</button>
					</div>
				);
			})}
		</>
	);
};

export default CardTools;
