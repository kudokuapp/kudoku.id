import { en } from "../../../../public/static/locales/en/common";
import { TitleSectionWhite } from "../../text/TitleSection";
import { Title } from "../finansial-check/FinansialCheck";

const Explanation = () => {
	return (
		<>
			<div className="lg:m-6 flex relative flex-row h-screen">
				<div className="slider">
					<div className="slides-primary">
						<div id="slide-1" className="m-auto">
							<div className="flex w-fit justify-between align-middle mx-8 h-full py-14">
								<div className="flex flex-col justify-between align-middle">
									<div>
										<Title.Provider value={en.section2.finansialApp}>
											<TitleSectionWhite />
										</Title.Provider>
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

export default Explanation;
