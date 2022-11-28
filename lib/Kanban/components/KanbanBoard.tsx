import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  color: 'primary' | 'secondary' | 'tertiary';
  icon: IconProp;
  heading: string;
  subheading: string;
  children: JSX.Element;
}

export const KanbanBoard = (props: Props) => {
  let bgOpacity10, bgOpacity25, textColor;
  switch (props.color) {
    case 'primary':
      bgOpacity10 = 'bg-primary/10';
      bgOpacity25 = 'bg-primary/25';
      textColor = 'text-primary';
      break;
    case 'secondary':
      bgOpacity10 = 'bg-secondary/10';
      bgOpacity25 = 'bg-secondary/25';
      textColor = 'text-secondary';
      break;
    case 'tertiary':
      bgOpacity10 = 'bg-tertiary/10';
      bgOpacity25 = 'bg-tertiary/25';
      textColor = 'text-tertiary';
      break;
  }
  return (
    <div
      className={`${bgOpacity10} border-[1px] border-outline rounded-xl py-10 px-6 h-full`}
    >
      <div className="flex flex-col items-center gap-4">
        <div className={`${bgOpacity25} p-6 rounded-2xl w-fit h-fit`}>
          <FontAwesomeIcon
            className={`${textColor} md:text-4xl text-2xl`}
            icon={props.icon}
          />
        </div>
        <h2
          className={`${textColor} md:text-4xl text-2xl font-bold m-0 text-center`}
        >
          {props.heading}
        </h2>
        <p className="text-center text-onPrimaryContainer sm:text-xl text-lg max-w-[400px]">
          {props.subheading}
        </p>
      </div>
      <div className="mt-10 md:px-4 px-0">{props.children}</div>
    </div>
  );
};
