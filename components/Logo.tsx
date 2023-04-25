import React from 'react'
import logo from '../public/assets/img/logo.png';
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <>
      <div className='d-flex justify-content-center py-4'>
        <Link href='index.html' className='logo d-flex align-items-center w-auto'>
          <Image src={logo} alt='Carenuity' />
          <span className='d-none d-lg-block'>Carenuity</span>
        </Link>
      </div>
    </>
  );
}

export default Logo