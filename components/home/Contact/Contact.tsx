import React from 'react';

const Contact = () => {
  return (
    <section id='contact'>
      <div className='my-container'>
        <h2 className='sr-only'>Contact us</h2>
        <div className='grid grid-cols-1 lg:grid-cols-3'>
          <div className='p-4 py-10 -mx-4 overflow-hidden lg:-ml-4 lg:mr-4'>
            <h3 className='text-lg font-medium'>Contact information</h3>
            <p className='max-w-3xl mt-6 text-base'>
              Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat
              massa dictumst amet. Sapien tortor lacus arcu.
            </p>
            <dl className='mt-8 space-y-6'>
              <dt>
                <span className='sr-only'>Phone number</span>
              </dt>
              <dd className='flex text-base'>
                <svg
                  className='flex-shrink-0 w-6 h-6 '
                  x-description='Heroicon name: outline/phone'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                  />
                </svg>
                <span className='ml-3'>+1 (555) 123-4567</span>
              </dd>
              <dt>
                <span className='sr-only'>Email</span>
              </dt>
              <dd className='flex text-base'>
                <svg
                  className='flex-shrink-0 w-6 h-6'
                  x-description='Heroicon name: outline/mail'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
                <span className='ml-3'>support@workcation.com</span>
              </dd>
            </dl>
          </div>
          {/* Contact form */}
          <div className='py-10 lg:col-span-2'>
            <h3 className='text-lg font-medium text-gray-900'>
              Send us a message
            </h3>
            <form
              // action='#'
              method='POST'
              className='grid grid-cols-1 mt-6 gap-y-6 sm:grid-cols-2 sm:gap-x-8'
            >
              <div>
                <label
                  htmlFor='first_name'
                  className='block text-sm font-medium text-gray-900'
                >
                  First name
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='first_name'
                    id='first_name'
                    autoComplete='given-name'
                    className='block w-full px-4 py-3 text-gray-900 border-gray-300 rounded-md shadow-sm focus:ring-primary-soft focus:border-primary-soft'
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='last_name'
                  className='block text-sm font-medium text-gray-900'
                >
                  Last name
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='last_name'
                    id='last_name'
                    autoComplete='family-name'
                    className='block w-full px-4 py-3 text-gray-900 border-gray-300 rounded-md shadow-sm focus:ring-primary-soft focus:border-primary-soft'
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-900'
                >
                  Email
                </label>
                <div className='mt-1'>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    autoComplete='email'
                    className='block w-full px-4 py-3 text-gray-900 border-gray-300 rounded-md shadow-sm focus:ring-primary-soft focus:border-primary-soft'
                  />
                </div>
              </div>
              <div>
                <div className='flex justify-between'>
                  <label
                    htmlFor='phone'
                    className='block text-sm font-medium text-gray-900'
                  >
                    Phone
                  </label>
                  <span id='phone-optional' className='text-sm text-gray-500'>
                    Optional
                  </span>
                </div>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='phone'
                    id='phone'
                    autoComplete='tel'
                    className='block w-full px-4 py-3 text-gray-900 border-gray-300 rounded-md shadow-sm focus:ring-primary-soft focus:border-primary-soft'
                    aria-describedby='phone-optional'
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <label
                  htmlFor='subject'
                  className='block text-sm font-medium text-gray-900'
                >
                  Subject
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='subject'
                    id='subject'
                    className='block w-full px-4 py-3 text-gray-900 border-gray-300 rounded-md shadow-sm focus:ring-primary-soft focus:border-primary-soft'
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <div className='flex justify-between'>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-gray-900'
                  >
                    Message
                  </label>
                  <span id='message-max' className='text-sm text-gray-500'>
                    Max. 500 characters
                  </span>
                </div>
                <div className='mt-1'>
                  <textarea
                    id='message'
                    name='message'
                    rows={4}
                    className='block w-full px-4 py-3 text-gray-900 border-gray-300 rounded-md shadow-sm focus:ring-primary-soft focus:border-primary-soft'
                    aria-describedby='message-max'
                    defaultValue={''}
                  />
                </div>
              </div>
              <div className='sm:col-span-2 sm:flex sm:justify-end'>
                <button
                  type='submit'
                  disabled
                  className='inline-flex items-center justify-center w-full px-6 py-3 mt-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-primary hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-soft sm:w-auto'
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
