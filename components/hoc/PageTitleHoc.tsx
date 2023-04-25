import { useRouter } from 'next/router'
import React, {  } from 'react'
import { PagePath } from '../../utils/types';

const PageTitleHoc = (Component: any, title: string) => {
 const router = useRouter();
  const _fun = ({ path }: { path: PagePath[] }) => {
    return <Component path={[...path, { url: router.asPath, name: title }]} />;
  };

  return _fun;
}

export default PageTitleHoc