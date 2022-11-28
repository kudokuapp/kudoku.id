import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}
export const RegisterButton = (props: Props) => {
  return (
    <button
      {...props}
      className="ease-out hover:scale-90 transition-all bg-gradient-to-br from-tertiary to-onPrimaryContainer rounded-lg sm:px-3 px-2 py-2 sm:h-full w-fit items-center shadow-lg hover:shadow-none flex"
    >
      <p className="text-onPrimary font-[500] sm:text-lg text-sm flex">
        {props.text}
        <span className="wave sm:ml-4 ml-1">👋 </span>
      </p>
    </button>
  );
};
