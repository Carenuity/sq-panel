import React from 'react';
import PageTitle from '../components/PageTitle';

const profile = () => {
  return (
    <>
      <PageTitle
        title='Profile'
        path={[
          { url: '/', name: 'Dashboard' },
          { url: '/profile', name: 'Profile' }
        ]}
      />
      {/* End Page Title */}
      <section className='section profile'>
        <div className='row'>
          <div className='col-xl-4'>
            <div className='card'>
              <div className='card-body profile-card pt-4 d-flex flex-column align-items-center'>
                <img
                  src={'/assets/img/profile-avatar.png'}
                  alt='Profile'
                  className='rounded-circle'
                />
                <h2>Paul Otieno</h2>
                <h3>Home Owner</h3>
              </div>
            </div>
          </div>
          <div className='col-xl-8'>
            <div className='card'>
              <div className='card-body pt-3'>
                {/* <!-- Bordered Tabs --> */}
                <ul className='nav nav-tabs nav-tabs-bordered' role='tablist'>
                  <li className='nav-item' role='presentation'>
                    <button
                      className='nav-link active'
                      data-bs-toggle='tab'
                      data-bs-target='#profile-overview'
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
                      data-bs-target='#profile-edit'
                      aria-selected='false'
                      role='tab'
                      tabIndex={-1}
                    >
                      Edit Profile
                    </button>
                  </li>
                </ul>
                <div className='tab-content pt-2'>
                  <div
                    className='tab-pane fade profile-overview active show'
                    id='profile-overview'
                    role='tabpanel'
                  >
                    <h5 className='card-title'>Profile Details</h5>

                    <div className='row'>
                      <div className='col-lg-3 col-md-4 label '>First Name</div>
                      <div className='col-lg-9 col-md-8'>: Paul</div>
                    </div>

                    <div className='row'>
                      <div className='col-lg-3 col-md-4 label'>Last Name</div>
                      <div className='col-lg-9 col-md-8'>: Otieno</div>
                    </div>

                    <div className='row'>
                      <div className='col-lg-3 col-md-4 label'>Email</div>
                      <div className='col-lg-9 col-md-8'>: abc@gmail.com</div>
                    </div>
                  </div>

                  <div
                    className='tab-pane fade profile-edit pt-3'
                    id='profile-edit'
                    role='tabpanel'
                  >
                    <form>
                      <div className='row mb-3'>
                        <label
                          htmlFor='firstName'
                          className='col-md-4 col-lg-3 col-form-label'
                        >
                          First Name
                        </label>
                        <div className='col-md-8 col-lg-9'>
                          <input
                            name='firstName'
                            type='text'
                            className='form-control'
                            id='firstName'
                            value='Paul'
                          />
                        </div>
                      </div>

                      <div className='row mb-3'>
                        <label
                          htmlFor='lastName'
                          className='col-md-4 col-lg-3 col-form-label'
                        >
                          Last Name
                        </label>
                        <div className='col-md-8 col-lg-9'>
                          <input
                            name='lastName'
                            type='text'
                            className='form-control'
                            id='lastName'
                            value='Otieno'
                          />
                        </div>
                      </div>

                      <div className='text-center'>
                        <button
                          type='submit'
                          className='btn btn-sm btn-success'
                        >
                          <i className='bi bi-pen p-1'></i>
                          Save Changes
                        </button>
                      </div>
                    </form>
                    {/* <!-- End Profile Edit Form --> */}
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

export default profile;
