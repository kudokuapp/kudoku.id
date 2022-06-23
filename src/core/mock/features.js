import FrameMulti from "../../../public/static/assets/feature/FrameMulti.svg";
import FrameSpend from "../../../public/static/assets/feature/FrameSpend.svg";
import FrameFinansial from "../../../public/static/assets/feature/FrameFinansial.svg";
import FrameCouple from "../../../public/static/assets/feature/FrameCouple.svg";
import FrameBank from "../../../public/static/assets/feature/FrameBank.svg";
import FrameTransfer from "../../../public/static/assets/feature/FrameTransfer.svg";
import { en } from "../../../public/static/locales/en/common";

const features = [
	{
		imgSrc: FrameMulti,
		title: en.section5.multiAccount.title,
		description: en.section5.multiAccount.description,
	},
	{
		imgSrc: FrameSpend,
		title: en.section5.expenseTracking.title,
		description: en.section5.expenseTracking.description,
	},
	{
		imgSrc: FrameFinansial,
		title: en.section5.finansialInsight.title,
		description: en.section5.finansialInsight.description,
	},
	{
		imgSrc: FrameCouple,
		title: en.section5.coupleFeatures.title,
		description: en.section5.coupleFeatures.description,
	},
	{
		imgSrc: FrameBank,
		title: en.section5.multiPayment.title,
		description: en.section5.multiPayment.description,
	},
	{
		imgSrc: FrameTransfer,
		title: en.section5.moneyTransfer.title,
		description: en.section5.moneyTransfer.description,
	},
];

export default features;
