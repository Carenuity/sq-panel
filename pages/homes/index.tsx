import { GetStaticProps, GetStaticPropsContext } from "next";
import HomeListItem from "../../components/HomeListItem";
import PageTitle from "../../components/PageTitle";

export default function Home({ auth }: { auth: boolean }) {
  return (
    <>
      <section className='section dashboard'>
        <div className='row'>
          <div className='col-lg-12'>
            <PageTitle title="My Homes" path={[{ url: '/', name: 'Homes' }]} />
            {/* End Page Title */}
            <div className='row'>
              <div className='col-xxl-4 col-md-4'>
                <HomeListItem
                  name={'Apartment'}
                  numberOfRooms={3}
                  detailsUrl='/homes/1'
                />
              </div>

              <div className='col-xxl-4 col-md-4'>
                <HomeListItem
                  name={'Serena Hotel'}
                  numberOfRooms={3}
                  detailsUrl='/homes/2'
                />
              </div>

              <div className='col-xxl-4 col-md-4'>
                <HomeListItem
                  name={'Siala Resort'}
                  numberOfRooms={3}
                  detailsUrl='/homes/3'
                />
              </div>

              <div className='col-xxl-4 col-md-4'>
                <HomeListItem
                  name={'Hilton Hotel'}
                  numberOfRooms={3}
                  detailsUrl='/homes/4'
                />
              </div>
            </div>
          </div>
          <div className='col-lg-4'></div>
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
