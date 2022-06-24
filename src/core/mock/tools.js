import FrameMulti from "../../../public/static/assets/feature/calculator.svg";
import FrameSpend from "../../../public/static/assets/feature/chartLine.svg";
import FrameFinansial from "../../../public/static/assets/feature/briefcaseMedical.svg";
import FrameCouple from "../../../public/static/assets/feature/chartPie.svg";
import FrameBank from "../../../public/static/assets/feature/listCheck.svg";
import FrameTransfer from "../../../public/static/assets/feature/triangle.svg";
import { en } from "../../../public/static/locales/en/common";

const tools = [
	{
		imgSrc: FrameMulti,
		title: en.section6.freedom.title,
		description: en.section6.freedom.description,
	},
	{
		imgSrc: FrameSpend,
		title: en.section6.fomo.title,
		description: en.section6.fomo.description,
	},
	{
		imgSrc: FrameFinansial,
		title: en.section6.health.title,
		description: en.section6.health.description,
	},
	{
		imgSrc: FrameCouple,
		title: en.section6.ideal.title,
		description: en.section6.ideal.description,
	},
	{
		imgSrc: FrameBank,
		title: en.section6.checklist.title,
		description: en.section6.checklist.description,
	},
	{
		imgSrc: FrameTransfer,
		title: en.section6.vote.title,
		description: en.section6.vote.description,
	},
];

export default tools;
