import { en } from "../../../public/static/locales/en/common";

const RoundedSub = () => {
	return (
		<>
			<div className="beforeRegister" id="beforeRegister">
				<div className="text-sm mt-2 text-black border-solid border-2 py-2 px-4 w-fit rounded-full">
					{en.section1.rolling}
				</div>
				<div className="text-sm text-left w-auto text-neutral mt-4">
					{en.section1.coming}
				</div>
			</div>
		</>
	);
};

export default RoundedSub;
