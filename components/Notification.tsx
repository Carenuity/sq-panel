import React from 'react'

const Notification = ({
  name,
  description,
  date,
}: {
  name: string;
  description: string;
  date: string;
}) => {
  return (
    <>
      <li className='notification-item'>
        <i className='bi bi-exclamation-circle text-warning'></i>
        <div>
          <h4>{name}</h4>
          <p>{description.substring(0, 38)}</p>
          <p>{date}min. ago</p>
        </div>
      </li>

      <li>
        <hr className='dropdown-divider' />
      </li>
    </>
  );
};

export default Notification