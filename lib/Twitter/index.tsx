import { Aside } from './components/Aside';
import { Avatar } from './components/Avatar';
import { useState, useEffect } from 'react';
import { UserAuth } from '../../pages/api/twitter/AuthContext';
import { NewCard } from './components/NewCard';
import { SignInButton } from './components/SignInButton';
import axios from 'axios';

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

export const TwitterCard = () => {
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

    const renderNewComment = () => {
        if (newReply) {
            return (
                <></>
                // <Avatar
                //     data-key={dataNewReply.id}
                //     key={dataNewReply.id}
                //     kudosid={dataNewReply.kudosNo ? dataNewReply.kudosNo : null}
                //     imgsrc={dataNewReply.imageURL}
                //     fullname={dataNewReply.fullName}
                //     commentdate={dataNewReply.date}
                //     comment={dataNewReply.text}
                //     twitterHandle={dataNewReply.twitterHandle}
                // />
            );
        }
    };

    const renderNewCard = () => {
        if (login === 'true') {
            return <NewCard handleSubmit={handleSubmit} handleClick={handleClick} />;
        } else {
            return <SignInButton />;
        }
    };

    return (
        <Aside state={login}>
            {renderNewComment()}
            {rootComment.map((comment: any) => {
                return (
                    <>
                    <div className="bg-onPrimary mx-2 rounded-xl shadow-md sm:flex-col flex-row flexz-30 flex-nowrap items-end gap-2 sm:py-2.5 sm:px-1.5 px-2.5 py-1.5 w-96 h-fit">
                        <Avatar
                            data-key={comment.id}
                            key={comment.id}
                            fullname={comment.fullname}
                            imgsrc={comment.imagesrc}
                            kudosid={comment.kudosno ? comment.kudosno : null}
                            commentdate={new Date(comment.commentdate)}
                            comment={comment.comment}
                            state={login}
                            twitterHandle={comment.twitterhandle}
                            keyId={comment.id}
                            replies={replyComment(comment.id)}
                        />
                    </div>
                    </>
                );
            })}
        </Aside>
    );
};
