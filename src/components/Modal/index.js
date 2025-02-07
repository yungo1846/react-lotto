import React from 'react';

const Modal = props => {
  const closeModal = e => {
    if (e.currentTarget === e.target) {
      props.closeModal();
    }
  };

  return (
    <div className="modal open" onClick={closeModal}>
      <div className="modal-inner p-10">
        <button type="button" className="modal-close" onClick={props.closeModal}>
          <svg viewBox="0 0 40 40">
            <path className="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
          </svg>
        </button>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
