import Image from "next/image";
import Link from "next/link";
import { en } from "../../../../public/static/locales/en/common";
import socialMedia from "../../../core/mock/socialMedia";
import {
	SubTitleSectionMd,
	SubTitleSectionSecondaryCenterLg,
} from "../../text/SubtitleSection";
import {
	TitleSectionBlack,
	TitleSectionPrimaryCenter,
	TitleSectionWhite,
} from "../../text/TitleSection";
import { Title } from "../finansial-check/FinansialCheck";

const Engagement2 = () => {
	const handleAnchor = (event) => {
		event.preventDefault();
		var reqId = "#placeholder";
    	window.scrollTo(0, $(reqId).offset().top-85);
	};
	const handleShake = () => {
		var d = document.getElementById('placeholder');
		d.className += " shakeit";
	}
	return (
		<>
			<div className="lg:m-6 grid md:grid-cols-3 md:gap-4 relative h-max">
				<div className="slider md:col-span-2">
					<div className="slides">
						<div id="slide-1" className="m-auto">
							<div className="flex w-fit justify-between align-middle mx-8 h-full py-14">
								<div className="flex flex-col justify-between align-middle">
									<div className="md:mx-20">
										<Title.Provider value={en.section8.left.title}>
											<TitleSectionPrimaryCenter />
										</Title.Provider>
										<Title.Provider value={en.section8.left.description}>
											<SubTitleSectionSecondaryCenterLg />
										</Title.Provider>
									</div>
									<div className="flex flex-row justify-between mt-2">
										{socialMedia.map((item, index) => {
											return (
												<Image
													src={item.imgSrc}
													width={40}
													height={40}
													alt=""
													key={index}
												/>
											);
										})}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="slider">
					<div className="slides-primary">
						<div id="slide-1" className="m-auto">
							<div className="flex w-fit justify-between align-middle mx-8 h-full py-14">
								<div className="flex flex-col justify-between align-middle">
									<div>
										<Title.Provider value={en.section8.right.title}>
											<TitleSectionWhite />
										</Title.Provider>
										<Title.Provider value={en.section8.right.description}>
											<TitleSectionBlack />
										</Title.Provider>
										<Link href="" onClick={handleAnchor}>
											<h4 className="text-white text-left text-2xl mt-10 cursor-pointer" onClick={handleShake}>
												{en.section8.right.waitlist + " " + "->"}
											</h4>
										</Link>
										<Title.Provider
											value={en.section8.right.tweet + " " + "->"}
										>
											<SubTitleSectionMd />
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

export default Engagement2;
