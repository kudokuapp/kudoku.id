import axios from 'axios';
import { useEffect, useState } from 'react';
import { UserAuth } from '../../../pages/api/twitter/AuthContext';
import { NewCard } from './NewCard';
import { SignInButton } from './SignInButton';

interface CommentType {
    commentdate: string | number | Date;
    parentid: null | number;
    id: number | string;
    fullName: string;
    imageURL: string;
    kudosNo: null | string | number;
    date: number | Date;
    text: string | null;
    twitterHandle: string;
}

export const Aside = ({ state = 'false', children }: { state: string; children: any }) => {
    const [top, setTop] = useState(false);
    const [bottom, setBottom] = useState(false);
    const [right, setRight] = useState(false);
    const [left, setLeft] = useState(false);
    const [mobile, setMobile] = useState(false);

    const onScroll = (e: any) => {
        const scrollHeight = e.target.scrollHeight;
        const scrollTop = e.target.scrollTop;
        const clientHeight = e.target.clientHeight;
        const heightCalc = scrollHeight - scrollTop;

        const scrollWidth = e.target.scrollWidth;
        const scrollLeft = e.target.scrollLeft;
        const clientWidth = e.target.clientWidth;
        const widthCalc = scrollWidth - scrollLeft;

        if (widthCalc === scrollWidth && scrollWidth === clientWidth) {
            setMobile(false);
        } else {
            setMobile(true);
        }

        if (!mobile) {
            if (clientHeight < 800) {
                setBottom(false);
                setTop(false);
            } else if (scrollTop === 0) {
                setBottom(true);
                setTop(false);
            }

            if (scrollTop > 10) {
                setBottom(true);
                setTop(true);
            }

            if (
                heightCalc - 1 === clientHeight ||
                heightCalc - 2 === clientHeight ||
                heightCalc - 3 === clientHeight ||
                heightCalc - 4 === clientHeight ||
                heightCalc - 5 === clientHeight ||
                heightCalc === clientHeight
            ) {
                setTop(true);
                setBottom(false);
            }
        } else {
            if (clientWidth < 300) {
                setRight(false);
                setLeft(false);
            } else if (scrollLeft === 0) {
                setRight(true);
                setLeft(false);
            }

            if (scrollLeft > 10) {
                setRight(true);
                setLeft(true);
            }

            if (
                widthCalc - 1 === clientWidth ||
                widthCalc - 2 === clientWidth ||
                widthCalc - 3 === clientWidth ||
                widthCalc - 4 === clientWidth ||
                widthCalc - 5 === clientWidth ||
                widthCalc + 1 === clientWidth ||
                widthCalc + 2 === clientWidth ||
                widthCalc + 3 === clientWidth ||
                widthCalc + 4 === clientWidth ||
                widthCalc + 5 === clientWidth ||
                widthCalc === clientWidth
            ) {
                setLeft(true);
                setRight(false);
            }
        }
    };

    const renderSpan = () => {
        if (!mobile) {
            if (top && bottom) {
                return (
                    <>
                        <SpanGradientTop />
                        <SpanGradientBottom />
                    </>
                );
            } else if (top) {
                return <SpanGradientTop />;
            } else if (bottom) {
                return <SpanGradientBottom />;
            }
        } else {
            if (left && right) {
                return (
                    <>
                        <SpanGradientLeft />
                        <SpanGradientRight />
                    </>
                );
            } else if (left) {
                return <SpanGradientLeft />;
            } else if (right) {
                return <SpanGradientRight />;
            }
        }
    };

    if (state === 'true') {
        return (
            <>
                {renderSpan()}
                <Div onScroll={onScroll}>{children}</Div>
            </>
        );
    } else {
        return (
            <>
                {renderSpan()}
                <Div onScroll={onScroll}>{children}</Div>
            </>
        );
    }
};

function Div({ onScroll, children }: { onScroll: any; children: any }) {
    const { user, kudos, twitterHandle, userTwitterToken, userTwitterSecret } = UserAuth();
    const [login, setLogin] = useState('false');
    const [backendComment, setBackendComment] = useState([]);
    const [newReply, setNewReply] = useState(false);
    const [dataNewReply, setDataNewReply] = useState({} as CommentType);
    useEffect(() => {
        if (user) {
            setLogin('true');
        } else {
            setLogin('false');
        }
    }, [user]);

    useEffect(() => {
        (async function () {
            const response = await axios.get('/api/comment/fetch');

            setBackendComment(response.data);
        })();
    }, []);

    const rootComment: CommentType[] = backendComment.filter(
        (comment: CommentType) => comment.parentid === null
    );

    const replyComment = (parentId: number): CommentType[] => {
        return backendComment
            .filter((comment: CommentType) => comment.parentid === parentId)
            .sort(
                (a: CommentType, b: CommentType) =>
                    new Date(a.commentdate).getTime() - new Date(b.commentdate).getTime()
            );
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const data = {
            text: event.target.text.value,
            email: user?.email,
            fullName: user?.displayName,
            kudosNo: kudos ? Number(kudos) : null,
            imageURL: user?.photoURL,
            date: new Date(),
            token: userTwitterToken,
            secret: userTwitterSecret,
            twitterHandle: twitterHandle,
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

        const responseDB = await fetch('/api/comment/post', options);
        const resultDB = await responseDB.json();

        const responseTweet = await fetch('/api/twitter/tweet', options);
        const resultTweet = await responseTweet.json();
    };

    const handleClick = (event: any) => {
        const data = {
            id: rootComment[rootComment.length - 1].id,
            text: event.target.value,
            email: user?.email,
            fullName: user?.displayName,
            kudosNo: kudos ? Number(kudos) : null,
            imageURL: user?.photoURL,
            date: new Date(),
            twitterHandle: twitterHandle,
        } as unknown as CommentType;

        setDataNewReply(data);

        setNewReply(true);
    };
    const renderNewCard = () => {
        if (login === 'true') {
            return <NewCard handleSubmit={handleSubmit} handleClick={handleClick} />;
        } else {
            return <SignInButton />;
        }
    };
    return (
        <>
        <h2 className='text-primary hidden sm:block'>Kudoku on Twitter</h2>
        <div className='flex flex-col sm:flex-row bg-primary sm:bg-transparent p-4 sm:p-0 rounded-xl sm:rounded-none w-full'>
            <h2 className='text-white block sm:hidden'>Kudoku on Twitter</h2>
            {renderNewCard()}
            <div className='flex flex-row w-full sm:mt-0 mt-4 flex-nowrap overflow-x-scroll scrollbar-hide'>
                {children}
            </div>
            <span
                className="fade-in pointer-events-none absolute z-40 w-[46px] hidden sm:block h-[180px] right-[20px] selection:bg-[rgba(255, 255, 255, 1)]"
                style={{
                    background: 'linear-gradient(90deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.6)',
                }}
            ></span>
        </div>
        </>
    );
}

function SpanGradientBottom() {
    return (
        <span
            className="fade-in pointer-events-none rounded-b-xl sm:block hidden fixed bottom-[2.5vh]  right-[5px] z-40 w-[46px] h-[50px] selection:bg-[rgba(255, 255, 255, 1)]"
            style={{
                background: 'linear-gradient(0deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)',
            }}
        ></span>
    );
}

function SpanGradientTop() {
    return (
        <span
            className="fade-in pointer-events-none rounded-t-xl sm:block hidden fixed top-[2.5vh] right-[5px] z-40 w-[46px] h-[50px] selection:bg-[rgba(255, 255, 255, 1)]"
            style={{
                background: 'linear-gradient(0deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)',
            }}
        ></span>
    );
}

function SpanGradientRight() {
    return (
        <span
            className="fade-in pointer-events-none rounded-r-xl block sm:hidden fixed bottom-[5px] right-[1vw] z-40 w-[46px] h-[46px] selection:bg-[rgba(255, 255, 255, 1)]"
            style={{
                background: 'linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)',
            }}
        ></span>
    );
}

function SpanGradientLeft() {
    return (
        <span
            className="fade-in pointer-events-none rounded-l-xl block sm:hidden fixed bottom-[5px] left-[1vw] z-40 w-[46px] h-[46px] selection:bg-[rgba(255, 255, 255, 1)]"
            style={{
                background: 'linear-gradient(90deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)',
            }}
        ></span>
    );
}
