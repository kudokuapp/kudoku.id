import Image from "next/image";
import { Title } from "../../../core/helper/TitleContext";
import { TitleSectionPrimary } from "../../text/TitleSection";
import { en } from "../../../../public/static/locales/en/common";
import CardTools from "../../card/card-tools";
import { SubTitleSectionMdBlack } from "../../text/SubtitleSection";

const Tools2 = () => {
	return (
		<>
			<div className="lg:m-6 flex relative flex-row h-max">
				<div className="slider">
					<div className="slides">
						<div id="slide-1" className="m-auto">
							<div className="flex w-full justify-between mx-8 h-max py-28">
								<div className="flex flex-col justify-between">
									<div>
										<Title.Provider value={en.section6.title}>
											<TitleSectionPrimary />
										</Title.Provider>
										<Title.Provider value={en.section6.subtitle}>
											<SubTitleSectionMdBlack />
										</Title.Provider>
									</div>

									<div className="grid md:grid-cols-3 lg:gap-10 grid-cols-1 gap-4 mt-10">
										<CardTools />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Tools2;
export { Title };
