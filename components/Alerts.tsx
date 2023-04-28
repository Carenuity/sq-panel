import React from 'react';
import { Alert } from '../utils/types';
import Link from 'next/link';
import Notification from './Notification';

const Alerts = ({ alerts }: { alerts: Alert[] }) => {
  return (
    <>
      <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications'>
        <li className='dropdown-header'>
          You have {alerts.length} new notifications
          <Link href='/alerts'>
            <span className='badge rounded-pill bg-success p-2 ms-2'>
              View all
            </span>
          </Link>
        </li>
        <li>
          <hr className='dropdown-divider' />
        </li>

        {alerts.map((alert: Alert) => (
          <Notification
            key={`${alert.id}`}
            name={alert.name}
            description={alert.description}
            date={alert.date}
          />
        ))}
        <li className='dropdown-footer'>
          <Link href='/alerts'>Show all notifications</Link>
        </li>
      </ul>
    </>
  );
};

export default Alerts;
