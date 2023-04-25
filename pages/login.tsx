import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../public/assets/img/logo.png';
import { GetStaticProps } from 'next';
import Logo from '../components/Logo';

const login = ({ auth }: { auth: boolean }) => {
  return (
    <>
      <section className='section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center'>
              <div className='card mb-3'>
                <div className='card-body'>
                  <div className='pt-4 pb-2'>
                    <Logo />
                    {/* <!-- End Logo --> */}

                    {/* <h5 className='card-title text-center pb-0 fs-4'>
                      Login to Your Account
                    </h5>
                    <p className='text-center small'>
                      Enter your username & password to login
                    </p> */}
                  </div>

                  <form className='row g-3 needs-validation' noValidate>
                    <div className='col-12'>
                      <label htmlFor='yourUsername' className='form-label'>
                        Email
                      </label>
                      <div className='input-group has-validation'>
                        {/* <span className="input-group-text" id="inputGroupPrepend">@</span> */}
                        <input
                          type='email'
                          name='username'
                          className='form-control'
                          id='yourUsername'
                          required
                        />
                        <div className='invalid-feedback'>
                          Please enter a valid email.
                        </div>
                      </div>
                    </div>

                    <div className='col-12'>
                      <label htmlFor='yourPassword' className='form-label'>
                        Password
                      </label>
                      <input
                        type='password'
                        name='password'
                        className='form-control'
                        id='yourPassword'
                        required
                      />
                      <div className='invalid-feedback'>
                        Please enter your password!
                      </div>
                    </div>

                    {/* <div className="col-12">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe" />
                        <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                      </div>
                    </div> */}
                    <div className='col-12'>
                      <button className='btn btn-success w-100' type='submit'>
                        Login
                      </button>
                    </div>
                    <div className='col-12'>
                      <p className='small mb-0'>
                        Don&apos;t have account?{' '}
                        <Link href='/register'>Create an account</Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      auth: true,
    },
  };
};

export default login;
