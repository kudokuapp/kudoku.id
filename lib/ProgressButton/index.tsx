'use client';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export type Percentage =
  | '0%'
  | '10%'
  | '20%'
  | '30%'
  | '40%'
  | '50%'
  | '60%'
  | '70%'
  | '80%'
  | '90%'
  | '100%';

export default function ProgressButton({
  disabled = false,
  text = 'Next',
  onClick = () => {},
  from = '10%',
  to = '100%',
}: {
  disabled: boolean;
  text: string;
  onClick: () => void;
  from: Percentage;
  to: Percentage;
}) {
  return (
    <div className="w-full h-fit flex flex-col gap-10 mt-8">
      <div className="w-full h-fit flex justify-end items-end">
        <motion.button
          type="button"
          disabled={disabled}
          animate={{
            opacity: 1,
          }}
          initial={false}
          whileHover={{ scale: disabled ? 1 : [null, 1.3, 1.1] }}
          transition={{ duration: 0.5 }}
          className={`py-2 px-4 cursor-pointer rounded-md shadow-xl font-bold flex gap-2 items-center justify-center text-base select-none ${
            disabled
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-primaryDark cursor-pointer'
          } text-onPrimaryDark`}
          onClick={onClick}
        >
          {text}
          <FontAwesomeIcon icon={faArrowRight} />
        </motion.button>
      </div>
      <motion.div
        className="h-[5px] bg-primaryDark rounded-md"
        animate={{ width: to }}
        style={{
          width: from,
        }}
        transition={{ duration: 2 }}
      />
    </div>
  );
}
