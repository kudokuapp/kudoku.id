import { Dialog, Transition } from '@headlessui/react';
import { Fragment, JSXElementConstructor, ReactElement, ReactFragment, ReactPortal } from 'react';
import Link from 'next/link';
import ReactTimeAgo from 'react-time-ago';
import { LottieAnimation } from '$lib/Lottie/PartyParrot';

export const NewCommentCard = (props: {
    twitterHandle: string;
    kudosid: null | number | string;
    imgsrc: string | undefined;
    fullname: string;
    commentdate: number | Date;
    comment: string | null;
}) => {
    const arrHandle = ['fdwilogo', 'aldimegaan', 'rizqyf_'];
    const renderType = () => {
        if (
            props.twitterHandle === arrHandle[0] ||
            props.twitterHandle === arrHandle[1] ||
            props.twitterHandle === arrHandle[2]
        ) {
            return <Founder type={null} />;
        } else if (props.kudosid !== null) {
            return <Kudos kudosid={props.kudosid} type={null} />;
        } else {
            return <span></span>;
        }
    };

    const renderTypeMobile = () => {
        if (
            props.twitterHandle === arrHandle[0] ||
            props.twitterHandle === arrHandle[1] ||
            props.twitterHandle === arrHandle[2]
        ) {
            return <Founder type={'mobile'} />;
        } else if (props.kudosid) {
            return <Kudos type={'mobile'} kudosid={props.kudosid} />;
        } else {
            return <span></span>;
        }
    };
    return (
        <div className="flex w-full h-fit min-w-[300px] max-w-[400px] items-center justify-center text-center">
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Dialog.Panel className="w-full select-none transform overflow-hidden rounded-2xl bg-onPrimary p-4 shadow-xl transition-all">
                    <div className="flex justify-between items-center">
                        <Link legacyBehavior href={`https://twitter.com/${props.twitterHandle}`} passHref><a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center sm:gap-2 gap-4 w-fit no-underline"
                            >
                                <div
                                    className="w-[34px] h-[34px] min-w-[34px] min-h-[34px] rounded-tl-[40px] rounded-tr-[40px] rounded-bl-[40px] rounded-br-[8px] border-2 border-primary bg-primary flex items-center justify-center shadow-sm"
                                    style={{ overflow: 'hidden' }}
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img alt="" src={props.imgsrc} width={34} height={34} />
                                </div>
                                <div>
                                    <h3 className="text-onPrimaryContainer m-0 text-base font-[500] text-left max-w-[120px] max-h-[4rem] overflow-auto">
                                    {props.fullname.substring(0, 14)}
                                    {props.fullname.length > 14 ? <span className='text-primary'>...</span> : <></>

                                    }
                                    </h3>
                                    {renderTypeMobile()}
                                </div>
                            </a></Link>
                        <div className="flex items-center gap-2">
                            {renderType()}
                            <p className="text-outline m-0 text-sm font-normal">
                                <ReactTimeAgo date={props.commentdate} locale="en-US" />
                            </p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <p className="text-base text-onPrimaryContainer/80 font-normal">
                            {props.comment}
                        </p>
                    </div>
                </Dialog.Panel>
            </Transition.Child>
        </div>
    );
};

const Founder = (props: { type: string | null }) => {
    return (
        <div
            className={`bg-primary select-none ${
                props.type === 'mobile' ? 'sm:hidden block' : 'sm:block hidden'
            } justify-center items-center m-0 sm:mt-0 mt-1 w-fit h-fit px-1.5 py-0.5 rounded-md`}
        >
            <p className="text-onPrimary m-0 text-xs font-light">Founder</p>
        </div>
    );
};

const Kudos = (props: { type: string | null; kudosid: string | number | null | undefined }) => {
    return (
        <div
            className={`bg-onErrorContainer select-none ${
                props.type === 'mobile' ? 'sm:hidden flex' : 'sm:flex hidden'
            } gap-1 justify-center items-center w-fit h-fit px-1.5 py-0.5 rounded-md`}
        >
            <LottieAnimation />
            <p className="text-onPrimary m-0 text-xs font-light">Kudos {props.kudosid}</p>
        </div>
    );
};
