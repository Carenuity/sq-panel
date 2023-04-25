import React, { FormEvent, useState } from 'react';
import { Threshold } from '../utils/types';

const handleSubmit = (e: FormEvent, threshold: Threshold) => {
  e.preventDefault();
  // Persist Alarm Values
  alert(`Upper: ${threshold.upper}\nLower: ${threshold.lower} `);
};

const AlarmSetting = ({
  threshold,
  setThreshold,
}: {
  threshold: Threshold;
  setThreshold: Function;
}) => {
  const [hasAlarm, setHasAlarm] = useState(true);

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e, threshold)}>
        <legend>Alarm Setting</legend>
        <div className='col-md-12 mb-3'>
          <div className='form-floating'>
            <input
              type='number'
              className='form-control'
              id='upperThreshold'
              name='upper'
              placeholder='Upper Threshold Value'
              value={threshold.upper}
              onChange={(e) =>
                setThreshold((old: Threshold) => ({
                  ...old,
                  upper: e.target.value,
                }))
              }
              disabled={!hasAlarm ? true : false}
            />
            <label htmlFor='upperThreshold' className='small'>
              Upper Threshold Value
            </label>
          </div>
        </div>
        <div className='col-md-12 mb-3'>
          <div className='form-floating'>
            <input
              type='number'
              className='form-control small'
              id='lowerThreshold'
              name='lower'
              placeholder='Lower Threshold Value'
              value={threshold.lower}
              onChange={(e) =>
                setThreshold((old: Threshold) => ({
                  ...old,
                  lower: e.target.value,
                }))
              }
              disabled={!hasAlarm ? true : false}
            />
            <label htmlFor='lowerThreshold' className='small'>
              Lower Threshold Value
            </label>
          </div>
        </div>
        <div>
          <button type='submit' className='btn btn-sm btn-success'>
            Update
          </button>
        </div>
      </form>
    </>
  );
};

export default AlarmSetting;
