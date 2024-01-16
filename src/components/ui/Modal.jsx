import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 z-50'>
      <div className='bg-white p-8 rounded-lg shadow-lg max-w-screen-xl'>
        {children}
        <div className='text-center mt-4'>
          <div
            className='button w-fit mx-auto text-white hover:text-black duration-200 '
            onClick={onClose}>
            <span className='button_lg'>
              <span className='button_sl'></span>
              <span className='button_text'>Cerrar</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
