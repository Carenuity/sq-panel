import { GetStaticProps } from 'next'
import Link from 'next/link'
import React from 'react'
import logo from '../public/assets/img/logo.png';
import Image from 'next/image';
import Logo from '../components/Logo';

const register = ({auth}: {auth: boolean}) => {
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
                      Create an Account
                    </h5> */}
                    <p className='text-center small'>
                      Enter your personal details to create account
                    </p>
                  </div>

                  <form className='row g-3 needs-validation' noValidate>
                    <div className='col-12'>
                      <label htmlFor='firstName' className='form-label'>
                        First Name
                      </label>
                      <input
                        type='text'
                        name='name'
                        className='form-control'
                        id='firstName'
                        required
                      />
                      <div className='invalid-feedback'>
                        Please, enter your first name!
                      </div>
                    </div>

                    <div className='col-12'>
                      <label htmlFor='lastName' className='form-label'>
                        Last Name
                      </label>
                      <input
                        type='text'
                        name='name'
                        className='form-control'
                        id='lastName'
                        required
                      />
                      <div className='invalid-feedback'>
                        Please, enter your last name!
                      </div>
                    </div>

                    <div className='col-12'>
                      <label htmlFor='yourEmail' className='form-label'>
                        Your Email
                      </label>
                      <input
                        type='email'
                        name='email'
                        className='form-control'
                        id='yourEmail'
                        required
                      />
                      <div className='invalid-feedback'>
                        Please enter a valid Email adddress!
                      </div>
                    </div>

                    {/* <div className="col-12">
                      <label htmlFor="yourUsername" className="form-label">Username</label>
                      <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" name="username" className="form-control" id="yourUsername" required />
                        <div className="invalid-feedback">Please choose a username.</div>
                      </div>
                    </div> */}

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

                    <div className='col-12'>
                      <label htmlFor='confirmPassword' className='form-label'>
                        Confirm Password
                      </label>
                      <input
                        type='password'
                        name='password'
                        className='form-control'
                        id='confirmPassword'
                        required
                      />
                      <div className='invalid-feedback'>
                        Please confirm your password!
                      </div>
                    </div>

                    {/* <div className="col-12">
                      <div className="form-check">
                        <input className="form-check-input" name="terms" type="checkbox" value="" id="acceptTerms" required />
                        <label className="form-check-label" htmlFor="acceptTerms">I agree and accept the <a href="#">terms and conditions</a></label>
                        <div className="invalid-feedback">You must agree before submitting.</div>
                      </div>
                    </div> */}
                    <div className='col-12'>
                      <button className='btn btn-success w-100' type='submit'>
                        Create Account
                      </button>
                    </div>
                    <div className='col-12'>
                      <p className='small mb-0'>
                        Already have an account?{' '}
                        <Link href='login'>Log in</Link>
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
}

export const getStaticProps: GetStaticProps = async () => {
 return {
   props: {
     auth: true,
   },
 };
}

export default register