import React from 'react';
import PageTitle from '../../../components/PageTitle';
import RoomListItem from '../../../components/RoomListItem';
import { useRouter } from 'next/router';

const Rooms = () => {
  const router = useRouter();
  const { homeId } = router.query;
  console.log(router);
  return (
    <>
      <PageTitle
        title='Apartment Rooms'
        path={[
          { url: '/homes', name: 'My Homes' },
          { url: `/homes/${homeId}`, name: 'Apartment' },
        ]}
      />
      {/* End Page Title */}
      <section className='section dashboard'>
        <div className='row'>
          <div className='col-xxl-4 col-md-4'>
            <RoomListItem
              name={'Production Floor'}
              devices={3}
              detailsUrl={`/homes/${homeId}/1`}
            />
          </div>

          <div className='col-xxl-4 col-md-4'>
            <RoomListItem
              name={"Parent's House"}
              devices={9}
              detailsUrl={`/homes/${homeId}/2`}
            />
          </div>

          <div className='col-xxl-4 col-md-4'>
            <RoomListItem
              name={'Servants Quarter'}
              devices={2}
              detailsUrl={`/homes/${homeId}/3`}
            />
          </div>

          <div className='col-xxl-4 col-md-4'>
            <RoomListItem
              name={'Hilton Hotel'}
              devices={1}
              detailsUrl={`/homes/${homeId}/4`}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Rooms;
