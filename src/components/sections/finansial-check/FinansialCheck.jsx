import { Title } from "../../../core/helper/TitleContext";
import {
	TitleSectionWhite,
	TitleSectionPrimaryContainer,
} from "../../text/TitleSection";
import { en } from "../../../../public/static/locales/en/common";
import CardFeature from "../../card/card-feature";

const FinansialCheck = () => {
	return (
		<>
			<div className="lg:m-6 flex relative flex-row h-max">
				<div className="slider">
					<div className="slides-primary">
						<div id="slide-1" className="m-auto">
							<div className="flex w-full justify-between mx-8 h-max py-14">
								<div className="flex flex-col justify-between">
									<div>
										<Title.Provider value={en.section5.features}>
											<TitleSectionWhite />
										</Title.Provider>
										<Title.Provider value={en.section5.Both}>
											<TitleSectionPrimaryContainer />
										</Title.Provider>
									</div>

									<div className="grid md:grid-cols-3 lg:gap-10 grid-cols-1 gap-4 mt-10">
										<CardFeature />
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

export default FinansialCheck;
export { Title };
