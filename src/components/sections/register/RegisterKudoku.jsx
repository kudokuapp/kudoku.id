import People from "../../../../public/static/assets/section1img.svg";
import Image from "next/image";
import { Title } from "../finansial-check/FinansialCheck";
import {
	TitleSectionPrimary,
	TitleSectionSecondary,
} from "../../text/TitleSection";
import { en } from "../../../../public/static/locales/en/common";
import { id } from "../../../../public/static/locales/id/common";
import Link from "next/link";
import Placeholder from "../../placeholder/placeholder";
import { SubTitleSection, SubTitleSectionSm } from "../../text/SubtitleSection";
import RoundedSub from "../../text/DoubleSub";

var language = "en";
var text = en;
var h4Text = en.section1.reach;

const ISSERVER = typeof window === "undefined";

if (!ISSERVER) {
	// Access localStorage
	if (localStorage.getItem("lang") === "en") {
		text = en;
		h4Text = en.section1.reach;
	} else {
		text = id;
		h4Text = id.section1.reach;
	}
}

const RegisterKudoku = () => {
	const changeLanguage = (e, path) => {
		if (path === "/en") {
			h4Text = en.section1.reach;
			language = "en";
			localStorage.setItem("lang", language);
			console.log("I clicked on the About Page");
		}
		if (path === "/id") {
			h4Text = id.section1.reach;
			language = "id";
			localStorage.setItem("lang", language);
			console.log("I clicked on the Posts Page");
		}
	};
	return (
		<>
			<div className="lg:m-6 mt-4 flex relative flex-row h-max">
				<div className="slider">
					<div className="slides">
						<div id="slide-1">
							<div className="flex lg:flex-row flex-col w-full justify-between mx-8 h-max py-14">
								<div className="flex flex-col justify-between text-left lg:w-1/2">
									<div>
										<Title.Provider value={en.section1.reach}>
											<TitleSectionPrimary />
										</Title.Provider>
										<Title.Provider value={en.section1.potential}>
											<TitleSectionSecondary />
										</Title.Provider>
										<Title.Provider value={en.section1.invite}>
											<SubTitleSection />
										</Title.Provider>
										<Placeholder />
										<Title.Provider value={en.section1.policy}>
											<SubTitleSectionSm />
										</Title.Provider>
									</div>
									<RoundedSub />
								</div>

								<Image src={People} alt="" />

								{/* <div className="text-xs relative bottom-0 pl-4 text-primary mb-4 -ml-3">
									<Link href="/">
										<a onClick={(e) => changeLanguage(e, "/en")}>EN</a>
									</Link>{" "}
									<Link href="/">
										<a onClick={(e) => changeLanguage(e, "/id")}>ID</a>
									</Link>
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default RegisterKudoku;
