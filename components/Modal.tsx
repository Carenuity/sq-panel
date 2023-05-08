import React, { ReactNode } from 'react'

const Modal = ({
  modalId,
  type,
  header,
  children,
  footer,
}: {
  modalId: string;
  type: string;
  header: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
}) => {
  return (
    <>
      <div className='modal fade' id={modalId} tabIndex={-1}>
        <div className={`modal-dialog ${type}`}>
          <div className='modal-content'>
            <div className='modal-header'>
              {header}
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>{children}</div>
            {footer && (
              <div className='modal-footer'>
               {footer}
                {/* <button
                  type='button'
                  className='btn btn-secondary'
                  data-bs-dismiss='modal'
                >
                  Close
                </button>
                <button type='button' className='btn btn-primary'>
                  Save changes
                </button> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal