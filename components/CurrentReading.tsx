import React, { useState } from 'react';
import { Threshold } from '../utils/types';
import { updateThreshold } from '../utils/common';

const CurrentReading = ({
  threshold,
  measurement,
}: {
  threshold: Threshold;
  measurement: string;
}) => {
  const [isConnected, setIsConnected] = useState(true);

  return (
    <>
      <div className='card info-card revenue-card shadow-none border'>
        <div className='card-body'>
          <h5 className='card-title'>
            {measurement} <span>| Current value</span>
          </h5>

          <div className='d-flex align-items-center justify-content-between'>
            <div className='ps-3'>
              <div
                className={`display-2 ${
                  updateThreshold(threshold) ? 'text-success' : 'text-danger'
                } ${!isConnected ? 'text-muted' : ''}`}
              >
                {threshold.current}{' '}
                <sup className='text-muted small display-6'>
                  <sup>&deg;</sup>C
                </sup>
              </div>

              {/* Show Message if connection is lost */}
              {!isConnected && (
                <span className='text-muted small pt-2 ps-1'>
                  Connection Lost
                </span>
              )}
            </div>

            <div className='card-icon rounded-circle d-flex align-items-center justify-content-center'>
              <i
                className={`bi bi-thermometer-half ${
                  updateThreshold(threshold) ? 'text-success' : 'text-danger'
                } ${!isConnected ? 'text-muted' : ''}`}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentReading;
