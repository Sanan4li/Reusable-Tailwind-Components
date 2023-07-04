import { twMerge } from 'tailwind-merge';

const Modal = ({
  show,
  closeHandler,
  containerClassName,
  children,
  closeButton = false,
}) => {
  return (
    <>
      <div
        className={`absolute top-0 left-0 z-50 flex h-screen w-full flex-col items-center justify-center bg-gray-300/70 py-2 ${
          !show ? 'hidden' : ''
        }`}
        onClick={closeHandler}
      >
        <div
          className={twMerge(
            `relative mx-auto rounded-md bg-white p-10 w-1/2 shadow-lg`,
            containerClassName
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {closeButton && (
            <span
              className='absolute right-2 top-3 cursor-pointer'
              onClick={closeHandler}
            >
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
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </span>
          )}

          {children}
        </div>
      </div>
    </>
  );
};
export default Modal;
