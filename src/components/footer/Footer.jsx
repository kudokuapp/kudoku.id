import Link from "next/link";
import { en } from "../../../public/static/locales/en/common";
import { Title } from "../sections/finansial-check/FinansialCheck";
import { SubTitleSection } from "../text/SubtitleSection";
import { TitleSectionBlack } from "../text/TitleSection";

const Footer = () => {
	return (
		<div className="flex lg:flex-row flex-col justify-between h-max px-8">
			<div className="flex flex-col w-fit justify-between align-middle h-full py-14">
				<div className="flex flex-col justify-between align-middle">
					<div>
						<Title.Provider value={en.footer.dokupedia}>
							<TitleSectionBlack />
						</Title.Provider>
						<Title.Provider value={en.footer.why}>
							<TitleSectionBlack />
						</Title.Provider>
					</div>
				</div>
				<div className="flex flex-row justify-between align-middle gap-6">
					<Link>
						<Title.Provider value={en.footer.imprint}>
							<SubTitleSection />
						</Title.Provider>
					</Link>
					<Link>
						<Title.Provider value={en.footer.term}>
							<SubTitleSection />
						</Title.Provider>
					</Link>
					<Link>
						<Title.Provider value={en.footer.policy}>
							<SubTitleSection />
						</Title.Provider>
					</Link>
				</div>
			</div>

			<div className="flex flex-col w-fit justify-between align-middle h-full py-14">
				<div className="flex flex-row justify-between text-right">
					<div>
						<Title.Provider value={en.footer.work}>
							<TitleSectionBlack />
						</Title.Provider>
					</div>
				</div>
				<div className="flex flex-row lg:justify-end text-right">
					<Title.Provider value={en.footer.copyright}>
						<SubTitleSection />
					</Title.Provider>
				</div>
			</div>
		</div>
	);
};

export default Footer;
