import { Title } from "../sections/finansial-check/FinansialCheck";

const SubTitleSection = () => {
	return (
		<>
			<Title.Consumer>
				{(subtitleSection) => {
					return (
						<h4 className="text-black text-left mt-10">{subtitleSection}</h4>
					);
				}}
			</Title.Consumer>
		</>
	);
};

const SubTitleSectionWM = () => {
	return (
		<>
			<Title.Consumer>
				{(subtitleSection) => {
					return (
						<h4 className="text-black text-left">{subtitleSection}</h4>
					);
				}}
			</Title.Consumer>
		</>
	);
};

const SubTitleSectionMd = () => {
	return (
		<>
			<Title.Consumer>
				{(subtitleSection) => {
					return (
						<h4 className="text-white text-left text-2xl mt-10">
							{subtitleSection}
						</h4>
					);
				}}
			</Title.Consumer>
		</>
	);
};

const SubTitleSectionMdBlack = () => {
	return (
		<>
			<Title.Consumer>
				{(subtitleSection) => {
					return (
						<h4 className="text-onPrimaryContainer text-left text-1xl mt-4">
							{subtitleSection}
						</h4>
					);
				}}
			</Title.Consumer>
		</>
	);
};

const SubTitleSectionWhiteCenter = () => {
	return (
		<>
			<Title.Consumer>
				{(subtitleSection) => {
					return (
						<h4 className="text-white text-center mt-10">{subtitleSection}</h4>
					);
				}}
			</Title.Consumer>
		</>
	);
};

const SubTitleSectionSecondaryCenterLg = () => {
	return (
		<>
			<Title.Consumer>
				{(subtitleSection) => {
					return (
						<h4 className="text-secondary text-2xl text-center mt-10">
							{subtitleSection}
						</h4>
					);
				}}
			</Title.Consumer>
		</>
	);
};

const SubTitleSectionSm = () => {
	return (
		<>
			<Title.Consumer>
				{(subtitleSection) => {
					return (
						<h4 className="text-black text-left text-sm">{subtitleSection}</h4>
					);
				}}
			</Title.Consumer>
		</>
	);
};

export {
	SubTitleSection,
	SubTitleSectionSm,
	SubTitleSectionSecondaryCenterLg,
	SubTitleSectionWhiteCenter,
	SubTitleSectionMd,
	SubTitleSectionWM,
	SubTitleSectionMdBlack
};
