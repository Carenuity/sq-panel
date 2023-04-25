import React from 'react';
import { UserName } from '../utils/types';
import Link from 'next/link';

const ProfileDropdown = ({
  image,
  name,
  email,
}: {
  image: string;
  name: UserName;
  email: string;
}) => {
  return (
    <>
      <a
        className='nav-link nav-profile d-flex align-items-center pe-0'
        href='#'
        data-bs-toggle='dropdown'
      >
        <img src={image} alt='Profile' className='rounded-circle' />
        <span className='d-none d-md-block dropdown-toggle ps-2'>
          {name.firstName.charAt(0)}. {name.lastName}
        </span>
      </a>
      {/* <!-- End Profile Iamge Icon --> */}

      <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow profile'>
        <li className='dropdown-header'>
          <h6>
            {name.firstName} {name.lastName}
          </h6>
          <span>
            {email}
          </span>
        </li>
        <li>
          <hr className='dropdown-divider' />
        </li>

        <li>
          <Link
            className='dropdown-item d-flex align-items-center'
            href='/profile'
          >
            <i className='bi bi-person'></i>
            <span>My Profile</span>
          </Link>
        </li>
        <li>
          <hr className='dropdown-divider' />
        </li>

        <li>
          <Link
            className='dropdown-item d-flex align-items-center'
            href='/settings'
          >
            <i className='bi bi-gear'></i>
            <span>Settings</span>
          </Link>
        </li>
        <li>
          <hr className='dropdown-divider' />
        </li>

        {/* <li>
          <a
            className='dropdown-item d-flex align-items-center'
            href='pages-faq.html'
          >
            <i className='bi bi-question-circle'></i>
            <span>Need Help?</span>
          </a>
        </li> */}
        <li>
          <hr className='dropdown-divider' />
        </li>

        <li>
          <a className='dropdown-item d-flex align-items-center' href='#'>
            <i className='bi bi-box-arrow-right'></i>
            <span>Logout</span>
          </a>
        </li>
      </ul>
      {/* <!-- End Profile Dropdown Items --> */}
    </>
  );
};

export default ProfileDropdown;
