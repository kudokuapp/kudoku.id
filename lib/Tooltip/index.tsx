'use client';

import {
  createRef,
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
  RefObject,
} from 'react';

export const Tooltip = (props: {
  text:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) => {
  const tipRef: RefObject<HTMLDivElement> = createRef();
  function handleMouseEnter() {
    if (tipRef.current !== null) {
      tipRef.current.style.opacity = '1';
      tipRef.current.style.marginTop = '20px';
    }
  }
  function handleMouseLeave() {
    if (tipRef.current !== null) {
      tipRef.current.style.opacity = '0';
      tipRef.current.style.marginTop = '10px';
    }
  }
  return (
    <div
      className="h-fit relative flex items-center z-[5] select-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute whitespace-no-wrap bg-onPrimary text-onBackground text-xs px-1.5 py-2 rounded-lg flex items-center transition-all duration-150 min-w-[150px]"
        style={{ top: '100%', opacity: 0 }}
        ref={tipRef}
      >
        <div
          className="bg-onPrimary h-3 w-3 absolute"
          style={{ top: '-6px', transform: 'rotate(45deg)' }}
        />
        {props.text}
      </div>
      {props.children}
    </div>
  );
};
