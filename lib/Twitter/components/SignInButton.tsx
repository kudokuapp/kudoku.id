import { Dialog, Transition } from '@headlessui/react';
import { Fragment, SVGProps, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faClose } from '@fortawesome/free-solid-svg-icons';
import { JoinTheThreadIcon, CommentOnSectionIcon } from './Icon';
import { TwitterButton } from './TwitterButton';

export const SignInButton = () => {
    let [isOpen, setIsOpen] = useState(false);
    function TwitterIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
            </svg>
        );
    }

    const renderButton = () => {
        if (isOpen) {
            return (
                <div className="w-full min-w-[300px] max-w-[400px] select-none transform mr-2 overflow-hidden rounded-2xl bg-onPrimaryContainer p-4 shadow-xl transition-all">
                    <div className="w-full shadow-xl rounded-3xl">
                        <div className="w-full">
                            <h4 className='text-white'>Ikut komenin website Kudoku</h4>
                            <div className="w-full mt-8 bg-onPrimary flex items-center justify-between rounded-xl p-2.5 gap-4">
                                <div
                                    className="w-full focus:outline-none cursor-pointer"
                                    onClick={() => setIsOpen(true)}
                                >
                                    Kasih komen lo...
                                </div>
                            </div>
                            <button
                                className="bg-[#3da1ff] flex items-center justify-center gap-2 hover:bg-primary rounded-lg px-3 py-1 w-full h-fit mt-4 shadow-2xl cursor-pointer text-onPrimary text-center"
                                type="submit"
                            >
                                <TwitterIcon className="w-5 h-5" fill="#ffffff" />
                                Masuk pake akun Twitter
                            </button>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="w-full min-w-[300px] max-w-[400px] select-none transform mr-2 overflow-hidden rounded-2xl bg-onPrimaryContainer p-4 shadow-xl transition-all">
                    <div className="w-full shadow-xl rounded-3xl">
                        <div className="w-full">
                            <h4 className='text-white'>Ikut komenin website Kudoku</h4>
                            <div className="w-full mt-8 bg-onPrimary flex items-center justify-between rounded-xl p-2.5 gap-4">
                                <div
                                    className="w-full focus:outline-none cursor-pointer"
                                    onClick={() => setIsOpen(true)}
                                >
                                    Kasih komen lo...
                                </div>
                            </div>
                            <button
                                className="bg-[#3da1ff] flex items-center justify-center gap-2 hover:bg-primary rounded-lg px-3 py-1 w-full h-fit mt-4 shadow-2xl cursor-pointer text-onPrimary text-center"
                                onClick={() => setIsOpen(true)}
                            >
                                <TwitterIcon className="w-5 h-5" fill="#ffffff" />
                                Masuk pake akun Twitter
                            </button>
                        </div>
                    </div>
                </div>
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

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full sm:items-center items-start justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-lg sm:max-h-[100vh] max-h-[86vh] transform overflow-hidden rounded-2xl bg-white sm:p-6 p-4 text-left align-middle shadow-xl transition-all overflow-y-auto">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-xl font-bold leading-6 text-onPrimaryContainer">
                                            Masuk pake akun Twitter kamu untuk lanjut
                                        </h3>
                                        <button
                                            onClick={() => setIsOpen(false)}
                                            className="w-fit h-fit rounded-full text-onPrimaryContainer hover:bg-onPrimaryContainer/10 hover:text-tertiary py-1 px-2"
                                        >
                                            <FontAwesomeIcon
                                                icon={faClose}
                                                className="text-xl p-0"
                                            />
                                        </button>
                                    </div>
                                    <div className="mt-2 flex gap-2 flex-wrap sm:justify-between justify-center w-full bg-onPrimaryContainer/10 items-center p-2 rounded-2xl">
                                        <div className="bg-onPrimaryContainer/30 w-full h-full sm:max-w-[200px] rounded-xl flex flex-col items-center justify-center px-4 pt-6 pb-4">
                                            <CommentOnSectionIcon />
                                            <p className="font-[500] text-base text-center text-onPrimaryContainer/60 mt-2">
                                                Ikut komen di website
                                            </p>
                                        </div>
                                        <div className="bg-onPrimaryContainer/30 w-full h-full sm:max-w-[200px] rounded-xl flex flex-col items-center justify-center px-4 pt-6 pb-4">
                                            <JoinTheThreadIcon />
                                            <p className="font-[500] text-base text-center text-onPrimaryContainer/60 mt-2">
                                                Reply komen orang lain
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        <TwitterButton type={'signin'} />
                                    </div>
                                    <p className="text-xs font-light text-onPrimaryContainer text-center mt-8">
                                        Dengan masuk pake akun Twitter kamu, ketika kamu komen, kamu
                                        juga akan nge-tweet di akun Twitter kamu. Kami gapunya akses
                                        apa-apa di Twitter kamu.
                                    </p>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};
