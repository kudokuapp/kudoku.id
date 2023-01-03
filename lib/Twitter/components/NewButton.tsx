import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faClose } from '@fortawesome/free-solid-svg-icons';
import { Form } from './Form';

export const NewButton = ({
    handleSubmit = () => {},
    handleClick = () => {},
}: {
    handleSubmit: ((e: any) => void) | ((e: any) => Promise<void>);
    handleClick: ((e: any) => void) | ((e: any) => Promise<void>);
}) => {
    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    const renderButton = () => {
        if (isOpen) {
            return (
                <button
                    onClick={closeModal}
                    className="min-w-[34px] w-[34px] min-h-[34px] h-[34px] rounded-tl-[40px] rounded-tr-[40px] rounded-bl-[40px] rounded-br-[8px] border-2 border-primary bg-primary flex items-center justify-center shadow-sm hover:opacity-70"
                    style={{ overflow: 'hidden' }}
                >
                    <div className="w-[34px] h-[34px] flex flex-col items-center justify-center p-2 bg-onPrimaryContainer">
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
                    onClick={openModal}
                    className="min-w-[34px] w-[34px] min-h-[34px] h-[34px] rounded-tl-[40px] rounded-tr-[40px] rounded-bl-[40px] rounded-br-[8px] border-2 border-primary bg-primary flex items-center justify-center shadow-sm hover:opacity-70"
                    style={{ overflow: 'hidden' }}
                >
                    <div className="w-[34px] h-[34px] flex flex-col items-center justify-center p-2 bg-onPrimaryContainer">
                        <FontAwesomeIcon className="text-onPrimary text-xl fade-in" icon={faPlus} />
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
                    onClose={closeModal}
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

                    <div className="sm:fixed sm:h-fit flex flex-col items-center justify-center h-[100vh] sm:px-0 px-4 sm:top-[2.5vh] sm:right-[60px] w-full min-w-[300px] max-w-[400px] m-auto">
                        <Form handleSubmit={handleSubmit} handleClick={handleClick} />
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};
