import Link from 'next/link';
import React, { ReactNode } from 'react'

const ListItem = ({
  name,
  subItem,
  subItemCategory,
  url,
  children
}: {
  name: string;
  subItem: number | string;
  subItemCategory: string;
  url: string;
  children?: ReactNode;
}) => {
  return (
    <>
      <div className='card info-card sales-card'>
        <div className='filter'>
          <a className='icon' href='#' data-bs-toggle='dropdown'>
            <i className='bi bi-three-dots'></i>
          </a>
          <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow'>
            <li className='dropdown-header text-start'>
              <h6>Actions</h6>
            </li>

            <li>
              <a className='dropdown-item' href='#'>
                <i className='bi bi-trash'></i>
                Remove
              </a>
            </li>
            <li>
              <a className='dropdown-item' href='#'>
                <i className='bi bi-pen'></i>
                Update
              </a>
            </li>
          </ul>
        </div>

        <Link href={url} className='card-body'>
          <h5 className='card-title'>{/* Sales <span>| Today</span> */}</h5>

          <div className='d-flex align-items-center'>
            <div className='card-icon rounded-circle d-flex align-items-center justify-content-center'>
              {name.split(' ')[0].substring(0, 2).toUpperCase()}
            </div>
            <div className='ps-3'>
              <h6>{name}</h6>
              <span className='text-success small pt-1 fw-bold'>
                {subItem}
              </span>{' '}
              <span className='text-muted small pt-2 ps-1'>
                {subItemCategory}
              </span>
            </div>
          </div>
        </Link>
        {children && <div className='card-footer'>{children}</div>}
      </div>
    </>
  );
};

export default ListItem