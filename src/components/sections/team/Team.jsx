import { en } from "../../../../public/static/locales/en/common";
import CardTeam from "../../card/card-teams";
import {
	TitleSectionPrimaryContainerCenter,
	TitleSectionWhiteCenter,
} from "../../text/TitleSection";
import { Title } from "../finansial-check/FinansialCheck";

const Team = () => {
	return (
		<>
			<div className="lg:m-6 flex relative flex-row h-max">
				<div className="slider">
					<div className="slides-primary">
						<div id="slide-1" className="m-auto">
							<div className="flex w-fit justify-between align-middle mx-8 h-max py-14">
								<div className="flex flex-col justify-between align-middle">
									<div>
										<Title.Provider value={en.section7.title}>
											<TitleSectionWhiteCenter />
										</Title.Provider>
										<Title.Provider value={en.section7.subtitle}>
											<TitleSectionPrimaryContainerCenter />
										</Title.Provider>
									</div>

									<div className="grid md:grid-cols-3 lg:gap-3 mt-10">
										<CardTeam />
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

export default Team;
