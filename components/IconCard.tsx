import React from 'react'

const IconCard = ({
  color,
  statistic,
  label,
  icon,
}: {
  color: string;
  statistic: number;
  label: string;
  icon: string;
}) => {
  return (
    <>
      <div className={`card info-card bg-dark sales-card`}>
        <div className='card-body pt-4'>
          <div className='d-flex align-items-center pt-2'>
            <div className='card-icon rounded-circle d-flex align-items-center justify-content-center'>
              <i className={`bi bi-${icon}`}></i>
            </div>
            <div className='ps-3'>
              <h6 className={`text-${color}`}>{statistic}</h6>
              {/* <span className='text-success small pt-1 fw-bold'>12%</span>{' '} */}
              <span className='text-muted small pt-2 ps-1'>{label}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IconCard