import { Inter } from '@next/font/google';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import PageTitle from '../components/PageTitle';
import IconCard from '../components/IconCard';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ auth }: { auth: boolean }) {
  return (
    <>
      <PageTitle title='Dashboard' path={[{ url: '/', name: 'Dashboard' }]} />
      {/* End Page Title */}

      <section className='section dashboard'>
        <div className='row'>
          <div className='col-xxl-4 col-md-4'>
            <IconCard
              color={'danger'}
              statistic={2}
              label={'Homes'}
              icon={'house-fill'}
            />
          </div>

          <div className='col-xxl-4 col-md-4'>
            <IconCard
              color={'info'}
              statistic={5}
              label={'Rooms'}
              icon={'house-door-fill'}
            />
          </div>

          <div className='col-xxl-4 col-md-4'>
            <IconCard
              color={'warning'}
              statistic={7}
              label={'Devices'}
              icon={'cpu-fill'}
            />
          </div>

          <div className='col-xxl-4 col-md-4'>
            <IconCard
              color={'success'}
              statistic={1}
              label={'Gateways'}
              icon={'cloud-check-fill'}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  return {
    props: {
      auth: false,
    },
  };
};
