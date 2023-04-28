import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Notification from '../components/Notification';
import AlertItem from '../components/AlertItem';
import PageTitle from '../components/PageTitle';

const Index = () => {
  return (
    <>
      <Head>
        <title>{'Alerts'}</title>
      </Head>

      <PageTitle title='My Alerts' path={[{ url: '/', name: 'My Alerts' }]} />
      {/* End Page Title */}

      <section className='section dashboard'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='card'>
                <div className='card-body'>
                  {/* <h5 className='card-title'>My Alerts</h5> */}

                  <ul
                    className='nav nav-tabs nav-tabs-bordered d-flex'
                    id='borderedTabJustified'
                    role='tablist'
                  >
                    <li className='nav-item flex-fill' role='presentation'>
                      <button
                        className='nav-link w-100 active'
                        id='notifications-tab'
                        data-bs-toggle='tab'
                        data-bs-target='#bordered-justified-notifications'
                        type='button'
                        role='tab'
                        aria-controls='notifications'
                        aria-selected='true'
                      >
                        Notifications
                      </button>
                    </li>
                    <li className='nav-item flex-fill' role='presentation'>
                      <button
                        className='nav-link w-100'
                        id='alarms-tab'
                        data-bs-toggle='tab'
                        data-bs-target='#bordered-justified-alarms'
                        type='button'
                        role='tab'
                        aria-controls='alarms'
                        aria-selected='false'
                        tabIndex={-1}
                      >
                        Alarms
                      </button>
                    </li>
                  </ul>
                  <div
                    className='tab-content pt-2'
                    id='borderedTabJustifiedContent'
                  >
                    <div
                      className='tab-pane fade show active'
                      id='bordered-justified-notifications'
                      role='tabpanel'
                      aria-labelledby='notifications-tab'
                    >
                      <div className='news'>
                        <AlertItem
                          headline={'Quidem autem et impedit'}
                          description={
                            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium neque illo asperiores dolore harum tenetur, quidem consectetur delectus nisi officia veritatis et saepe eos animi consequuntur ipsum officiis iusto porro.'
                          }
                          timestamp={'30'}
                        />
                        <AlertItem
                          headline={'Quidem autem et impedit'}
                          description={
                            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium neque illo asperiores dolore harum tenetur, quidem consectetur delectus nisi officia veritatis et saepe eos animi consequuntur ipsum officiis iusto porro.'
                          }
                          timestamp={'30'}
                        />
                        <AlertItem
                          headline={'Quidem autem et impedit'}
                          description={
                            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium neque illo asperiores dolore harum tenetur, quidem consectetur delectus nisi officia veritatis et saepe eos animi consequuntur ipsum officiis iusto porro.'
                          }
                          timestamp={'30'}
                        />
                        <AlertItem
                          headline={'Quidem autem et impedit'}
                          description={
                            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium neque illo asperiores dolore harum tenetur, quidem consectetur delectus nisi officia veritatis et saepe eos animi consequuntur ipsum officiis iusto porro.'
                          }
                          timestamp={'30'}
                        />
                      </div>
                    </div>
                    <div
                      className='tab-pane fade'
                      id='bordered-justified-alarms'
                      role='tabpanel'
                      aria-labelledby='alarms-tab'
                    >
                      <div className='news'>
                        <AlertItem
                          headline={'Quidem autem et impedit'}
                          description={
                            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium neque illo asperiores dolore harum tenetur, quidem consectetur delectus nisi officia veritatis et saepe eos animi consequuntur ipsum officiis iusto porro.'
                          }
                          timestamp={'30'}
                        />
                        <AlertItem
                          headline={'Quidem autem et impedit'}
                          description={
                            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium neque illo asperiores dolore harum tenetur, quidem consectetur delectus nisi officia veritatis et saepe eos animi consequuntur ipsum officiis iusto porro.'
                          }
                          timestamp={'30'}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
