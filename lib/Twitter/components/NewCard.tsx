import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { UserAuth } from '../../../pages/api/twitter/AuthContext';

export const NewCard = (props: any) => {
    const [text, setText] = useState('');
    const { user } = UserAuth();
    const data = {
        fullName: user?.displayName,
        imageURL: user?.photoURL as string | undefined,
    };

    return (
        <div className="w-full min-w-[300px] max-w-[400px] select-none transform overflow-hidden rounded-2xl bg-onPrimaryContainer p-4 mr-2 shadow-xl transition-all">
            <div className="w-full shadow-xl rounded-3xl">
                <form onSubmit={props.handleSubmit} className="w-full">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center sm:gap-2 gap-4 w-fit no-underline"
                    >
                        <div
                            className="w-[34px] h-[34px] min-w-[34px] min-h-[34px] rounded-[40px] border-2 border-primary bg-primary flex items-center justify-center shadow-sm"
                            style={{ overflow: 'hidden' }}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img alt="" src={data.imageURL} width={34} height={34} />
                        </div>
                        <div>
                            <h3 className="text-white m-0 text-base font-[500] text-left max-h-[4rem] overflow-auto">
                                {data.fullName}
                            </h3>
                        </div>
                    </a>
                    <div className="w-full bg-onPrimary flex items-center mt-4 justify-between rounded-xl p-2.5 gap-4">
                        <input
                            type="text"
                            name="text"
                            className="w-full focus:outline-none"
                            placeholder="Tulis reply lo..."
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </div>
                    <button
                        className="bg-primary rounded-lg px-3 py-1 w-full h-fit mt-4 shadow-2xl cursor-pointer hover:bg-[#3da1ff] text-onPrimary text-center"
                        type="submit"
                        disabled={!text}
                        onClick={props.handleClick}
                        value={text}
                    >
                        Post
                    </button>
                </form>
            </div>
        </div>
    );
};
