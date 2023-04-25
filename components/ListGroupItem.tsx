import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import Modal from './Modal';
import dynamic from 'next/dynamic';

// const Modal = dynamic(() => import('./Modal'), {
//   loading: () => <p>Loading</p>,
// });

const ListGroupItem = ({
  modalId,
  deviceName,
  measurement,
  icon,
  reading,
  children,
}: {
  modalId: string;
  deviceName: string;
  measurement: string;
  icon: string;
  reading: string;
  children: ReactNode;
}) => {
  return (
    <>
      <button
        type='button'
        className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
        data-bs-toggle='modal'
        data-bs-target={`#${modalId}`}
      >
        <span>
          <i className={`${icon} me-1 text-success`}></i> {children}
        </span>
        <span className='badge bg-secondary rounded-pill'>{reading}</span>
      </button>
      {window.document && createPortal(
        <Modal
          id={modalId}
          deviceName={deviceName}
          measurement={measurement}
        />,
        document.body
      )}
    </>
  );
};

export default ListGroupItem;
