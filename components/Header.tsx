import React from 'react'
import logo from '../public/assets/img/logo.png';
import Image from 'next/image';
import ProfileDropdown from './ProfileDropdown';

const Header = () => {
  return (
    <>
      <header
        id='header'
        className='header fixed-top d-flex align-items-center'
      >
        <div className='d-flex align-items-center justify-content-between'>
          <a href='http://carenuity.com' className='logo d-flex align-items-center'>
            <Image src={logo} alt='Carenuity' />
            <span className='d-none d-lg-block'>Carenuity</span>
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
                <span className='badge bg-primary badge-number'>4</span>
              </a>
              {/* <!-- End Notification Icon --> */}

              <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications'>
                <li className='dropdown-header'>
                  You have 4 new notifications
                  <a href='#'>
                    <span className='badge rounded-pill bg-primary p-2 ms-2'>
                      View all
                    </span>
                  </a>
                </li>
                <li>
                  <hr className='dropdown-divider' />
                </li>

                <li className='notification-item'>
                  <i className='bi bi-exclamation-circle text-warning'></i>
                  <div>
                    <h4>Lorem Ipsum</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>30 min. ago</p>
                  </div>
                </li>

                <li>
                  <hr className='dropdown-divider' />
                </li>

                <li className='notification-item'>
                  <i className='bi bi-x-circle text-danger'></i>
                  <div>
                    <h4>Atque rerum nesciunt</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>1 hr. ago</p>
                  </div>
                </li>

                <li>
                  <hr className='dropdown-divider' />
                </li>

                <li className='notification-item'>
                  <i className='bi bi-check-circle text-success'></i>
                  <div>
                    <h4>Sit rerum fuga</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>2 hrs. ago</p>
                  </div>
                </li>

                <li>
                  <hr className='dropdown-divider' />
                </li>

                <li className='notification-item'>
                  <i className='bi bi-info-circle text-primary'></i>
                  <div>
                    <h4>Dicta reprehenderit</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>4 hrs. ago</p>
                  </div>
                </li>

                <li>
                  <hr className='dropdown-divider' />
                </li>
                <li className='dropdown-footer'>
                  <a href='#'>Show all notifications</a>
                </li>
              </ul>
              {/* <!-- End Notification Dropdown Items --> */}
            </li>
            {/* <!-- End Notification Nav --> */}

            <li className='nav-item dropdown pe-3'>
              <ProfileDropdown image={'/assets/img/profile-avatar.png'} name={{firstName: 'Paul', lastName: 'Otieno'}} email={'abc@gmail.com'} />
            </li>
            {/* <!-- End Profile Nav --> */}
          </ul>
        </nav>
        {/* <!-- End Icons Navigation --> */}
      </header>
    </>
  );
}

export default Header