import React from 'react';
import { createPortal } from 'react-dom';
import GatewayModal from './GatewayModal';

const GatewayItem = ({
  index,
  name,
  home,
  threadFrequency,
  hardwareVersion,
}: {
  index: number;
  name: string;
  home: string;
  threadFrequency: number;
  hardwareVersion: string;
}) => {
  return (
    <>
      <tr>
        <th scope='row '>{index}</th>
        <td className='text-nowrap'>{name}</td>
        <td className='text-nowrap'>{home}</td>
        <td className='text-nowrap'>{threadFrequency} Hz</td>
        <td className='text-nowrap'>{hardwareVersion}</td>
        <td className='d-flex justify-content-center align-items-center'>
          <button className='btn btn-sm btn-white mx-2'>
            <i className='bi bi-trash-fill text-danger'></i>
          </button>
          <button
            className='btn btn-sm btn-white'
            data-bs-toggle='modal'
            data-bs-target='#verticalycentered'
          >
            <i className='bi bi-three-dots-vertical text danger'></i>
          </button>
          {createPortal(
            <GatewayModal id={'verticalycentered'} name={'NN'} home={'Apartment'} />,
            document.body
          )}
        </td>
      </tr>
    </>
  );
};

export default GatewayItem;
