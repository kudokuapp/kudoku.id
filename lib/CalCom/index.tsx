'use client';
import Cal from '@calcom/embed-react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dialog, Transition } from '@headlessui/react';
import { motion } from 'framer-motion';
import Image, { ImageProps } from 'next/image';
import { Fragment, useState } from 'react';

interface IDataPayload {
  id: string | number;
  firstname: string;
  lastname: string;
  email: string;
  whatsapp: string;
}

interface IFoundersCal {
  calLink: string;
  name: string;
  title: string;
  avatar: ImageProps['src'];
}

export interface ICalCom extends React.ComponentPropsWithRef<'div'> {
  founders: IFoundersCal;
  user: IDataPayload;
}

const CalCom: React.FC<ICalCom> = ({ founders, user }) => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <motion.button
        type="button"
        animate={{
          opacity: 1,
        }}
        whileHover={{ scale: [null, 1.3, 1.1] }}
        transition={{ duration: 0.5 }}
        onClick={openModal}
        className="w-fit h-fit p-2 rounded-xl shadow-md flex gap-4 items-center bg-primary dark:bg-primaryDark"
      >
        <Image
          src={founders.avatar}
          height={40}
          quality={100}
          alt={`${founders.name} Avatar`}
          draggable={false}
        />
        <div className="flex flex-col items-start">
          <p className="text-base font-medium text-onPrimary dark:text-onPrimaryDark m-0">
            {founders.name}
          </p>
          <p className="text-xs font-medium text-onPrimary dark:text-onPrimaryDark m-0">
            {founders.title}
          </p>
        </div>
      </motion.button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-20" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-90" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className="w-full max-w-xl max-h-[95vh] transform overflow-auto rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                  as="div"
                >
                  <Dialog.Title
                    as="div"
                    className="flex justify-end items-center sticky top-0 z-30 rounded-md"
                  >
                    <button
                      className="w-[40px] h-[40px] flex items-center justify-center rounded-full hover:bg-gray-300 bg-onPrimary"
                      onClick={closeModal}
                    >
                      <FontAwesomeIcon
                        icon={faXmark}
                        className="text-primary text-3xl"
                      />
                    </button>
                  </Dialog.Title>

                  <Cal
                    calLink={founders.calLink}
                    config={{
                      name: `${user.firstname} ${user.lastname}`,
                      email: `${user.email}`,
                      notes: `Meeting Kudos No. ${user.id} dengan Founder`,
                      theme: 'light',
                    }}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CalCom;
