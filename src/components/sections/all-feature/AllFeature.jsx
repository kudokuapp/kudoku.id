import Image from 'next/image';
import Budgeting from '../../../../public/static/assets/feature/budgetingFeaturePreview.svg'
import Expense from '../../../../public/static/assets/feature/expenseTrackerPreview.svg'
import Tracking from '../../../../public/static/assets/feature/moneyTrackerPreview.svg'
import Saving from '../../../../public/static/assets/feature/savingControlPreview.svg'
import Assets from '../../../../public/static/assets/feature/onePaymentPreview.svg'
import Bills from '../../../../public/static/assets/feature/billsAndLoansPreview.svg'
import Mortgage from '../../../../public/static/assets/feature/mortgageControlPreview.svg'


const AllFeature = () => {
    return (
        <>
        <div className="lg:m-6 mt-12 flex relative flex-row h-max">

            <div className="slider">

                <div className="slides">

                    <div id="slide-1" >
                        <div className="flex flex-row w-full justify-center align-middle mx-8 h-max py-14">

                            <div className="flex flex-col justify-center align-middle">
                                <h1 className="text-left text-4xl text-primary font-bold">All in one app.<span className='text-LIGHT/onPrimaryContainer'> So you can focus on achieving your financial independence.</span></h1>
                                <div className='align-middle grid md:grid-cols-4 lg:gap-4 grid-cols-2 gap-2 mt-4'>
                                    <Image className='w-100 h-auto' src={Budgeting} alt="" />
                                    <Image className='w-100 h-auto' src={Expense} alt="" />
                                    <Image className='w-100 h-auto' src={Tracking} alt="" />
                                    <Image className='w-100 h-auto' src={Saving} alt="" />
                                    <Image className='w-100 h-auto' src={Assets} alt="" />
                                    <Image className='w-100 h-auto' src={Bills} alt="" />
                                    <Image className='w-100 h-auto' src={Mortgage} alt="" />
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
            
        </div>
        </>
    )
}

export default AllFeature;