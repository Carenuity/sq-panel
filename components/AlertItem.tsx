import React from 'react'

const AlertItem = ({
  headline,
  description,
  timestamp,
}: {
  headline: string;
  description: string;
  timestamp: string;
}) => {
  return (
    <>
      <div className='post-item clearfix border-bottom pb-2'>
        <h4 className='m-0 d-flex justify-content-between align-items-center'>
          <a href='!#'>
            <i className='bi bi-exclamation-circle-fill text-warning me-2 d-none d-sm-inline-block'></i>
            {headline}
          </a>
          <button className='btn btn-sm btn-outline-light'>
            <i className='bi bi-trash-fill text-danger'></i>
          </button>
        </h4>
        <p className='ms-sm-4 m-0 position-relative'>
          {description}
          <span className='position-absolute bottom-0 end-0 text-muted fw-bold fst-italic'>
            {timestamp} min ago
          </span>
        </p>
      </div>
    </>
  );
};

export default AlertItem