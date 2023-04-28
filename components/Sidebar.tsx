import Link from 'next/link';
import React from 'react'

const Sidebar = () => {
  return (
    <>
      <aside id='sidebar' className='sidebar'>
        <ul className='sidebar-nav' id='sidebar-nav'>
          <li className='nav-item'>
            <Link className='nav-link collapsed' href='/'>
              <i className='bi bi-grid'></i>
              <span>Dashboard</span>
            </Link>
          </li>
          {/* <!-- End Dashboard Nav --> */}

          <li className='nav-item'>
            <Link className='nav-link collapsed' href='/homes'>
              <i className='bi bi-house'></i>
              <span>My Homes</span>
            </Link>
          </li>
          {/* <!-- End My Homes Nav --> */}

          <li className='nav-item'>
            <Link className='nav-link collapsed' href='/gateways'>
              <i className='bi bi-diagram-3-fill'></i>
              <span>Gateways</span>
            </Link>
          </li>
          {/* <!-- End Gateways Nav --> */}

          <li className='nav-item'>
            <a
              className='nav-link collapsed'
              href='https://www.chipglobe.shop/'
              target='_blank'
            >
              <i className='bi bi-shop'></i>
              <span>Shop</span>
            </a>
          </li>
          {/* <!-- End Shop Nav --> */}

          <li className='nav-item'>
            <a
              className='nav-link collapsed'
              href='https://chipglobe-dev.web.app/'
              target='_blank'
            >
              <i className='bi bi-cpu'></i>
              <span>WebFlashing</span>
            </a>
          </li>
          {/* <!-- End Shop Nav --> */}

          <li className='nav-item'>
            <Link className='nav-link collapsed' href='/mobile'>
              <i className='bi bi-phone'></i>
              <span>Mobile App</span>
            </Link>
          </li>
          {/* <!-- End Mobile App Nav --> */}
        </ul>
      </aside>
    </>
  );
}

export default Sidebar