'use client';

import { useState } from 'react';
import Modal from './Modal';


export default function LoginButton({}) {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="text-white font-normal sm:leading-snug leading-snug text-center my-4">
      <button
        className="font-medium gradient-button rounded-lg text-onPrimaryContainer mt-4 px-6 py-1.5 w-fit h-fit transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-200 shadow-lg"
        onClick={openModal}
      >
        Klik disini untuk <strong>join waitlist</strong>
      </button>

      <Modal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
}
