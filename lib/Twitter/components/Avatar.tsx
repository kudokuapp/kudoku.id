import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { ReplyForm } from './ReplyForm';
import { TwitterButton } from './TwitterButton';
import { NewCommentCard } from './NewCommentCard';
import { UserAuth } from '../../../pages/api/twitter/AuthContext';
import Link from 'next/link';
import ReactTimeAgo from 'react-time-ago';

interface DataReply {
    replies: any[];
    email: string | null | undefined;
    kudosNo: string | number | null;
    imageURL: string;
    fullName: string;
    date: Date | number | string;
    text: string | null;
    twitterHandle: string;
}

export const Avatar = (props: {
    keyId: any;
    replies: any[];
    fullname: string;
    imgsrc: string | undefined;
    state: string;
    kudosid: string | number | null;
    commentdate: number | Date;
    comment: string;
    twitterHandle: string;
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [newReply, setNewReply] = useState(false);
    const [dataNewReply, setDataNewReply] = useState({} as DataReply);

    const { user, kudos, twitterHandle } = UserAuth();

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const data = {
            parentId: props.keyId,
            text: event.target.text.value,
            email: user?.email,
            fullName: user?.displayName,
            kudosNo: kudos ? Number(kudos) : null,
            imageURL: user?.photoURL,
            date: new Date(),
            twitterHandle: twitterHandle,
            replies: props.replies
        };

        event.target.text.value = '';

        const JSONdata = JSON.stringify(data);

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        };

        const response = await fetch('/api/comment/post', options);
        const result = await response.json();
    };

    const handleClick = (event: any) => {
        const data = {
            text: event?.target.value,
            email: user?.email,
            fullName: user?.displayName,
            kudosNo: kudos ? Number(kudos) : null,
            imageURL: user?.photoURL,
            date: new Date(),
            twitterHandle: twitterHandle,
            replies: props.replies
        } as DataReply;

        setDataNewReply(data);

        setNewReply(true);
    };

    const renderNewComment = () => {
        if (newReply) {
            return (
                <NewCommentCard
                    kudosid={dataNewReply.kudosNo ? dataNewReply.kudosNo : null}
                    imgsrc={dataNewReply.imageURL}
                    fullname={dataNewReply.fullName}
                    commentdate={new Date(dataNewReply.date)}
                    comment={dataNewReply.text}
                    twitterHandle={dataNewReply.twitterHandle}
                />
            );
        }
    };

    const renderNotification = () => {
        if (props.replies.length > 0) {
            return (
                <div className="absolute w-[14px] h-[14px] bg-tertiary ml-2 mt-1 flex items-center justify-center rounded-full border-[1px] border-primary top-0">
                    <p className="text-onPrimary text-xs">{props.replies.length}</p>
                </div>
            );
        }
    };

    const renderButton = () => {
            return (
                <div className="relative w-full min-w-[300px] max-w-[300px] sm:max-w-[400px]">
                    <button
                        onClick={() => setIsOpen(true)}
                        style={{ overflow: 'hidden' }}
                    >
                        <div className="flex justify-between items-start p-2 h-40">
                            <div className="flex flex-col">
                                <div className="flex justify-between items-center w-full min-w-[284px] max-w-[284px] sm:max-w-[400px]">
                                    <Link legacyBehavior href={`https://twitter.com/${props.twitterHandle}`} passHref>
                                        <a
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
                                            </div>
                                        </a>
                                    </Link>
                                    <div className="flex items-center gap-2">
                                        <p className="text-outline m-0 text-sm font-normal">
                                            <ReactTimeAgo date={props.commentdate} locale="en-US" />
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className="my-4 bg-background p-2 rounded-xl h-16 flex flex-col align-middle justify-center w-full min-w-[284px] max-w-[284px] sm:max-w-[400px]">
                                        <p className="text-base text-onPrimaryContainer/80 hidden sm:block font-normal w-[340px]">
                                            {props.comment.substring(0, 70)}
                                            {props.comment.length > 70 ? <span className='text-primary'>...read more</span> : <></>

                                            }
                                        </p>
                                        <p className="text-base text-onPrimaryContainer/80 block sm:hidden font-normal w-[270px]">
                                            {props.comment.substring(0, 50)}
                                            {props.comment.length > 50 ? <span className='text-primary'>...read more</span> : <></>

                                            }
                                        </p>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 animation-popup left-0 ml-3">
                                    <button
                                        onClick={() => setIsOpen(true)}
                                        className="w-[20px] h-[20px] min-w-[20px] min-h-[20px] rounded-tl-[40px] rounded-tr-[40px] rounded-bl-[8px] rounded-br-[40px] border-2 border-primary shadow-sm"
                                        style={{ overflow: 'hidden' }}
                                    >
                                        {renderNotification()}
                                        <div
                                            style={{ overflow: 'hidden' }}
                                        >
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
            );
    };

    const renderForm = () => {
        if (props.state === 'true') {
            return (
                <ReplyForm
                    keyId={props.keyId}
                    handleSubmit={handleSubmit}
                    handleClick={handleClick}
                />
            );
        } else {
            return <TwitterButton type="comment" />;
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
                        <NewCommentCard
                            kudosid={props.kudosid}
                            imgsrc={props.imgsrc}
                            fullname={props.fullname}
                            commentdate={props.commentdate}
                            comment={props.comment}
                            twitterHandle={props.twitterHandle}
                        />
                        <div className="relative flex flex-col items-end pl-[30px] justify-center w-full min-w-[284px] max-w-[400px] gap-4">
                            {props.replies.length > 0 &&
                                props.replies.map((comment) => {
                                    return (
                                        <NewCommentCard
                                            key={comment.id}
                                            kudosid={comment.kudosno ? comment.kudosno : null}
                                            imgsrc={comment.imagesrc}
                                            fullname={comment.fullname}
                                            commentdate={new Date(comment.commentdate)}
                                            comment={comment.comment}
                                            twitterHandle={comment.twitterhandle}
                                        />
                                    );
                                })}

                            {renderNewComment()}

                            <Dialog.Panel className="w-full h-full">
                                <div className="mt-4 h-full w-full">{renderForm()}</div>
                            </Dialog.Panel>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};
