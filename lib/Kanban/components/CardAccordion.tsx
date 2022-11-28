import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export interface Props {
  color: 'primary' | 'secondary' | 'tertiary';
  heading: string;
  text: string;
  href: URL;
  type: LabelType['type'][];
}

export const CardAccordion = (props: Props) => {
  const typeArr = [...props.type];
  let bgOpacity10, textColor;
  switch (props.color) {
    case 'primary':
      bgOpacity10 = 'bg-primary/10';
      textColor = 'text-primary';
      break;
    case 'secondary':
      bgOpacity10 = 'bg-secondary/10';
      textColor = 'text-secondary';
      break;
    case 'tertiary':
      bgOpacity10 = 'bg-tertiary/10';
      textColor = 'text-tertiary';
      break;
  }
  return (
    <Accordion>
      <AccordionSummary
        className={bgOpacity10}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <div className="flex items-center gap-2">
          <div>
            <FontAwesomeIcon
              className={`${textColor} text-lg`}
              icon={faFolder}
            />
          </div>
          <p className="text-onPrimaryContainer font-bold text-lg">
            {props.heading}
          </p>
        </div>
      </AccordionSummary>
      <AccordionDetails className={bgOpacity10}>
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {typeArr.map((item, index) => {
            return <Label key={index} type={item} />;
          })}
        </div>
        <p className="text-onPrimaryContainer">{props.text}</p>
        <button className="bg-onSurface px-1.5 py-0.5 rounded-md text-sm animation-popup font-[500]">
          <Link
            href={props.href}
            passHref
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline text-surface"
          >
            Read more on Notion
          </Link>
        </button>
      </AccordionDetails>
    </Accordion>
  );
};

interface LabelType {
  type: 'Improvement' | 'Bug Fix' | 'New Features';
}

const Label = ({ type }: JSX.IntrinsicAttributes & LabelType) => {
  if (type === 'Improvement') {
    return (
      <div className="bg-[#28446C] px-2 py-0.5 rounded">
        <p className="text-center text-[#D5DAE3] text-sm">Improvement</p>
      </div>
    );
  } else if (type === 'Bug Fix') {
    return (
      <div className="bg-[#5A5A5A] px-2 py-0.5 rounded">
        <p className="text-center text-[#DFDFDF] text-sm">Bug Fix</p>
      </div>
    );
  } else if (type === 'New Features') {
    return (
      <div className="bg-[#2B593E] px-2 py-0.5 rounded">
        <p className="text-center text-[#CFD9D4] text-sm">New Features</p>
      </div>
    );
  } else {
    return <></>;
  }
};
