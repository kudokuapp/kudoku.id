import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { CommentCard } from './CommentCard';

export const NewAvatar = (props: {
    fullname: any;
    imgsrc: any;
    kudosid: any;
    commentdate: any;
    comment: any;
    twitterHandle: any;
    replies: any;
}) => {
    const [isOpen, setIsOpen] = useState(true);

    const renderButton = () => {
        if (isOpen) {
            return (
                <button
                    onClick={() => setIsOpen(false)}
                    className="min-w-[34px] w-[34px] min-h-[34px] h-[34px] rounded-tl-[40px] rounded-tr-[40px] rounded-bl-[40px] rounded-br-[8px] border-2 border-primary bg-primary flex items-center justify-center shadow-sm animation-mantep"
                    style={{ overflow: 'hidden' }}
                >
                    <div className="w-[34px] h-[34px] flex flex-col items-center justify-center p-2">
                        <FontAwesomeIcon
                            className="text-onPrimary text-xl fade-in"
                            icon={faClose}
                        />
                    </div>
                </button>
            );
        } else {
            return (
                <button
                    onClick={() => setIsOpen(true)}
                    className="min-w-[34px] w-[34px] min-h-[34px] h-[34px] rounded-tl-[40px] rounded-tr-[40px] rounded-bl-[40px] rounded-br-[8px] border-2 border-primary bg-primary flex items-center justify-center shadow-sm animation-mantep"
                    style={{ overflow: 'hidden' }}
                >
                    <div className="w-[34px] h-[34px] flex flex-col items-center justify-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            alt={`${props.fullname} Avatar`}
                            src={props.imgsrc}
                            width={34}
                            height={34}
                        />
                    </div>
                </button>
            );
        }
    };

    return (
        <>
            {renderButton()}

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 h-[100vh] w-[100vw] z-20 overflow-auto"
                    onClose={() => setIsOpen(false)}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed h-[100vh] w-[100vw] inset-0 bg-background bg-opacity-90" />
                    </Transition.Child>

                    <div className="relative flex flex-col items-center justify-center min-h-[100vh] py-[25vh] w-full overflow-y-auto m-auto gap-4 sm:px-0 px-4">
                        <CommentCard
                            kudosid={props.kudosid}
                            imgsrc={props.imgsrc}
                            fullname={props.fullname}
                            commentdate={props.commentdate}
                            comment={props.comment}
                            twitterHandle={props.twitterHandle}
                            replies={props.replies}
                        />
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};
