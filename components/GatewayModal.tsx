import React, { useState } from 'react';
import Modal from './Modal';

const GatewayModal = ({
  id,
  name,
  home,
}: {
  id: string;
  name: string;
  home: string;
}) => {
  const [gateway, setGateway] = useState(name);

  return (
    <>
      <Modal
        modalId={id}
        type={'modal-dialog-centered'}
        header={
          <h5 className='modal-title display-6'>
            {home}
            <span className='card-title px-3'>
              <span>| Gateway</span>
            </span>
          </h5>
        }
        footer={
          <button
            type='button'
            className='btn btn-sm btn-danger'
            data-bs-dismiss='modal'
          >
           <i className='bi bi-trash'></i>
            Delete
          </button>
        }
      >
        <section className='section dashboard'>
          <div className='row'>
            <div className='col-md-12'>
              <form className='row g-3 align-items-center'>
                <div className='col-md-9'>
                  <div className='form-floating'>
                    <input
                      type='text'
                      className='form-control form-control-sm'
                      value={gateway}
                      onChange={(e) => setGateway(e.target.value)}
                      placeholder='Gateway Name'
                    />
                    <label htmlFor='floatingName'>Gateway Name</label>
                  </div>
                </div>

                <div className='col-md-3'>
                  <div className='text-center'>
                    <button type='submit' className='btn btn-sm btn-success'>
                      <i className='bi bi-pen p-1'></i>
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className='col-md-12'>
              <h5 className='card-title'>{gateway} Metadata</h5>

              <div className='row'>
                <div className='col-lg-8 col-md-9 label '>
                  Thread Network operating frequency
                </div>
                <div className='col-lg-4 col-md-3'>: 1500 Hz</div>
              </div>

              <div className='row'>
                <div className='col-lg-8 col-md-9 label '>
                  DNS-SD _meshcop._udp service
                </div>
                <div className='col-lg-4 col-md-3'>: 36.9</div>
              </div>

              <div className='row'>
                <div className='col-lg-8 col-md-9 label '>Hardware version</div>
                <div className='col-lg-4 col-md-3'>: v1</div>
              </div>

              <div className='row'>
                <div className='col-lg-8 col-md-9 label '>
                  SW modules versions
                </div>
                <div className='col-lg-4 col-md-3'>: v1</div>
              </div>

              <div className='row'>
                <div className='col-lg-8 col-md-9 label '>Children</div>
                <div className='col-lg-4 col-md-3'>: Dv2</div>
              </div>
            </div>
          </div>
        </section>
      </Modal>
    </>
  );
};

export default GatewayModal;
