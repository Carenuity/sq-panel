import Link from 'next/link';
import React from 'react';
import { PagePath } from '../utils/types';

const PageTitle = ({ path, title }: { path: PagePath[]; title: string; }) => {
  return (
    <>
      <div className='pagetitle'>
        <h1>{title}</h1>
        <nav>
          <ol className='breadcrumb'>
            {path.map((_path: PagePath, i) => {
              if (i !== path.length - 1) {
                return (
                  <li key={i} className='breadcrumb-item'>
                    <Link href={_path.url}>{_path.name}</Link>
                  </li>
                );
              } else {
                return (
                  <li key={i} className='breadcrumb-item active'>
                    {_path.name}
                  </li>
                );
              }
            })}
          </ol>
        </nav>
      </div>
    </>
  );
};

export default PageTitle;
