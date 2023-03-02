import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';

const PrintDocument = ({ children }) => {
  const componentRef = useRef();
  const buttonToPrint = (
    <div className="flex items-end justify-end px-4">
      <button className=" pt-2 pl-2 pb-2.5 pr-2 flex  text-right rounded-sm text-gray-800 font-semibold border border-gray-400 hover:border-gray-700  mr-0  cursor-pointer hover:text-black focus:outline-none">
        <span className="px-4">Print</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
          />
        </svg>
      </button>
    </div>
  );
  return (
    <>
      <ReactToPrint
        trigger={() => buttonToPrint}
        content={() => componentRef.current}
      />
      <div className="mt-5 my-10  w-11/12 ml-auto mr-auto" ref={componentRef}>
        {children}
      </div>
    </>
  );
};

export default PrintDocument;
