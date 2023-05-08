import React from 'react'
import logo from '../public/assets/img/logos/logo-white.svg';
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <>
      <div className='d-flex justify-content-center py-4'>
        <Link
          href='index.html'
          className='logo d-flex align-items-center w-auto'
        >
          <img src={'/assets/img/logos/logo-white.svg'} alt='Carenuity' />
        </Link>
      </div>
    </>
  );
}

export default Logo