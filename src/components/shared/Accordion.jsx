import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

const Accordion = ({ title, children, containerClass }) => {
  const [open, setOpen] = useState(false);

  console.warn('open', open);

  return (
    <div
      className={twMerge(
        'flex flex-col p-4 w-1/2 border-2 border-black space-y-5',
        containerClass
      )}
    >
      <div
        onClick={() => setOpen((prev) => !prev)}
        className='flex justify-between cursor-pointer'
      >
        <div>{title}</div>
        <div className={`${open && 'transform rotate-180'} `}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M4.5 15.75l7.5-7.5 7.5 7.5'
            />
          </svg>
        </div>
      </div>
      {open && children}
    </div>
  );
};

export default Accordion;
