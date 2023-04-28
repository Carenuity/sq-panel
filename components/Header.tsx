import React, {  } from 'react';
import ProfileDropdown from './ProfileDropdown';
import Alerts from './Alerts';
import { notifications } from '../utils/constants';


const Header = ({ isMobile }: { isMobile: boolean }) => {
  
  return (
    <>
      <header
        id='header'
        className='header fixed-top d-flex align-items-center'
      >
        <div className='d-flex align-items-center justify-content-between'>
          <a
            href='http://carenuity.com'
            className='logo d-flex align-items-center'
          >
            {isMobile && (
              <img
                src={'/assets/img/logos/android-chrome-192x192.png'}
                alt='Carenuity'
              />
            )}
            {!isMobile && (
              <img src={'/assets/img/logos/logo-white.svg'} alt='Carenuity' />
            )}
            {/* <span className='d-none d-lg-block'>Carenuity</span> */}
          </a>
          <i className='bi bi-list toggle-sidebar-btn'></i>
        </div>
        {/* <!-- End Logo --> */}

        <div className='search-bar'>
          <form
            className='search-form d-flex align-items-center'
            method='POST'
            action='#'
          >
            <input
              type='text'
              name='query'
              placeholder='Search'
              title='Enter search keyword'
              disabled
            />
            <button type='submit' title='Search' disabled>
              <i className='bi bi-search'></i>
            </button>
          </form>
        </div>
        {/* <!-- End Search Bar --> */}

        <nav className='header-nav ms-auto'>
          <ul className='d-flex align-items-center'>
            <li className='nav-item d-block d-lg-none'>
              <a className='nav-link nav-icon search-bar-toggle ' href='#'>
                <i className='bi bi-search'></i>
              </a>
            </li>
            {/* <!-- End Search Icon--> */}

            <li className='nav-item dropdown'>
              <a
                className='nav-link nav-icon'
                href='#'
                data-bs-toggle='dropdown'
              >
                <i className='bi bi-bell'></i>
                <span className='badge bg-info badge-number'>4</span>
              </a>
              {/* <!-- End Notification Icon --> */}

              <Alerts alerts={notifications} />
              {/* <!-- End Notification Dropdown Items --> */}
            </li>
            {/* <!-- End Notification Nav --> */}

            <li className='nav-item dropdown pe-3'>
              <ProfileDropdown
                image={'/assets/img/profile-avatar.png'}
                name={{ firstName: 'Paul', lastName: 'Otieno' }}
                email={'abc@gmail.com'}
              />
            </li>
            {/* <!-- End Profile Nav --> */}
          </ul>
        </nav>
        {/* <!-- End Icons Navigation --> */}
      </header>
    </>
  );
};

export default Header;
