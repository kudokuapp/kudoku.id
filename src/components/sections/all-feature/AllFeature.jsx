import Image from "next/image";
import Budgeting from "../../../../public/static/assets/feature/budgetingFeaturePreview.svg";
import Expense from "../../../../public/static/assets/feature/expenseTrackerPreview.svg";
import Tracking from "../../../../public/static/assets/feature/moneyTrackerPreview.svg";
import Saving from "../../../../public/static/assets/feature/savingControlPreview.svg";
import Assets from "../../../../public/static/assets/feature/onePaymentPreview.svg";
import Bills from "../../../../public/static/assets/feature/billsAndLoansPreview.svg";
import Mortgage from "../../../../public/static/assets/feature/mortgageControlPreview.svg";

const AllFeature = () => {
	return (
		<>
			<div className="lg:m-6 mt-12 flex relative flex-row h-max">
				<div className="slider">
					<div className="slides">
						<div id="slide-1">
							<div className="flex flex-row w-full justify-center align-middleh-max py-14">
								<div className="flex flex-col w-screen justify-center align-middle mx-8">
									<h1 className="text-left text-2xl lg:text-4xl text-LIGHT/onPrimaryContainer font-bold">
										All in one app.
										<span className="text-black">
											<br />
											So you can focus on achieving your financial independence.
										</span>
									</h1>
									<div className="align-middle self-center md:flex md:flex-wrap md:justify-center grid grid-cols-2 gap-2 mt-4">
										<Image className="w-100 h-auto" src={Budgeting} alt="" />
										<Image className="w-100 h-auto" src={Expense} alt="" />
										<Image className="w-100 h-auto" src={Saving} alt="" />
										<Image className="w-100 h-auto" src={Bills} alt="" />
										<Image className="w-100 h-auto" src={Assets} alt="" />
										<Image className="w-100 h-auto" src={Mortgage} alt="" />
										<Image className="w-100 h-auto" src={Tracking} alt="" />
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

export default AllFeature;
