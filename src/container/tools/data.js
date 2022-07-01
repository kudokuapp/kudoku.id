import Calculator from "./images/calculator.svg";
import ChartLine from "./images/chartLine.svg";
import BriefcaseMedical from "./images/briefcaseMedical.svg";
import ChartPie from "./images/chartPie.svg";
import ListCheck from "./images/listCheck.svg";
import Triangle from "./images/triangle.svg";

const data = [
	{
		imgSrc: Calculator,
		alt: "Calculator Icon",
		title: "Freedom calculator",
		description:
			"Based on your savings, expenses, and passive income, see how long you could have complete financial freedom.",
		link: "/tools/freedomcalculator",
	},
	{
		imgSrc: ChartLine,
		alt: "Chart Line Icon",
		title: "FOMO calculator",
		description:
			"That Rp 510.900.000 Honda CRV that you bought 5 years ago... What if you put it in BBCA instead?",
		link: "/tools/fomocalculator",
	},
	{
		imgSrc: BriefcaseMedical,
		alt: "Briefcase Medical Icon",
		title: "Financial health check",
		description:
			"A healthy financial condition is a must to keep you sane. Find out how healthy your financial condition right now.",
		link: "/tools/healthcheck",
	},
	{
		imgSrc: ChartPie,
		alt: "Chart Pie Icon",
		title: "Ideal budgeting",
		description:
			"Different person has different lifestyle. Get the most suitable budgeting based on your current lifestyle.",
		link: "/tools/budget",
	},
	{
		imgSrc: ListCheck,
		title: "Indonesia finance checklist",
		description:
			"Learn what financial task can yield the biggest benefits for your situation. Subject to Indonesian regulations.",
		link: "/tools/checklist",
	},
	{
		imgSrc: Triangle,
		title: "Vote for the next tools!",
		description:
			"We continually update the financial tools for you to play with. You can now cast your vote for your favourite tools!",
		link: "/tools/vote",
	},
];

export default data;
