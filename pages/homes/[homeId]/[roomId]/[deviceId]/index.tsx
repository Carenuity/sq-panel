import { useRouter } from 'next/router';
import React from 'react';
import PageTitle from '../../../../../components/PageTitle';

const DeviceDetails = () => {
  const router = useRouter();
  const { homeId, roomId, deviceId } = router.query;
  return (
    <>
      <PageTitle
        title='Device Details'
        path={[
          { url: '/homes', name: 'My Homes' },
          { url: `/homes/${homeId}`, name: `Apartment ${homeId}` },
          {
            url: `/homes/${homeId}/${roomId}`,
            name: `Bedroom ${roomId}`,
          },
          {
            url: `/homes/${homeId}/${roomId}/${deviceId}`,
            name: `Device ${deviceId}`,
          },
        ]}
      />
      {/* End Page Title */}

      <section className='section profile'>
        <div className='row'>
          <div className='col-xl-10'>
            <div className='card'>
              <div className='card-body pt-3'>
                {/* <!-- Bordered Tabs --> */}
                <ul className='nav nav-tabs nav-tabs-bordered' role='tablist'>
                  <li className='nav-item' role='presentation'>
                    <button
                      className='nav-link active'
                      data-bs-toggle='tab'
                      data-bs-target='#device-overview'
                      aria-selected='true'
                      role='tab'
                    >
                      Overview
                    </button>
                  </li>

                  <li className='nav-item' role='presentation'>
                    <button
                      className='nav-link'
                      data-bs-toggle='tab'
                      data-bs-target='#device-edit'
                      aria-selected='false'
                      role='tab'
                      tabIndex={-1}
                    >
                      Edit Device
                    </button>
                  </li>
                </ul>
                <div className='tab-content pt-2'>
                  <div
                    className='tab-pane fade device-overview active show'
                    id='device-overview'
                    role='tabpanel'
                  >
                    <h5 className='card-title'>Device Details</h5>

                    <div className='row'>
                      <div className='col-lg-3 col-md-4 label '>
                        Device Name
                      </div>
                      <div className='col-lg-9 col-md-8'>: Device 1</div>
                    </div>

                    <div className='row'>
                      <div className='col-lg-3 col-md-4 label'>Gateway</div>
                      <div className='col-lg-9 col-md-8'>: NN</div>
                    </div>

                    <div className='row'>
                      <div className='col-lg-3 col-md-4 label'>
                        Firmware version
                      </div>
                      <div className='col-lg-9 col-md-8'>: v1.2.3</div>
                    </div>

                    <div className='row'>
                      <div className='col-lg-3 col-md-4 label'>
                        Hardware version
                      </div>
                      <div className='col-lg-9 col-md-8'>: v3.0.0</div>
                    </div>

                    <div className='row'>
                      <div className='col-lg-3 col-md-4 label'>
                        Thread Net joining time
                      </div>
                      <div className='col-lg-9 col-md-8'>
                        : {Date.now().toString()}
                      </div>
                    </div>
                  </div>

                  <div
                    className='tab-pane fade device-edit pt-3'
                    id='device-edit'
                    role='tabpanel'
                  >
                    {/* <!-- Profile Edit Form --> */}
                    <form>
                      <div className='row mb-3'>
                        <label
                          htmlFor='fullName'
                          className='col-md-4 col-lg-3 col-form-label'
                        >
                          Device Name
                        </label>
                        <div className='col-md-8 col-lg-9'>
                          <input
                            name='fullName'
                            type='text'
                            className='form-control'
                            id='fullName'
                            value='Device 1'
                          />
                        </div>
                      </div>

                      <div className='text-center'>
                        <button type='submit' className='btn btn-sm btn-success'>
                          <i className='bi bi-pen p-1'></i>
                          Save Changes
                        </button>
                      </div>
                    </form>
                    {/* <!-- End Profile Edit Form --> */}

                    <hr />
                    <div className='row'>
                      <div className='col-12'>
                        <h5 className='card-title'>
                          Remove Device 1 Permanently
                        </h5>
                        <div className='text-end'>
                          <button className='btn btn-sm btn-danger'>
                            <i className='bi bi-trash p-1'></i>
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End Bordered Tabs --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DeviceDetails;
