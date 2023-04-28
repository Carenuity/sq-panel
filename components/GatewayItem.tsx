import React from 'react'

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
          <button className='btn btn-sm btn-white'>
            <i className='bi bi-three-dots-vertical text danger'></i>
          </button>
        </td>
      </tr>
    </>
  );
};

export default GatewayItem