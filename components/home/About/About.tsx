import React from 'react';
import { InboxIcon, SparklesIcon } from '@heroicons/react/outline';

const About = () => {
  return (
    // <section id='about' className='py-12'>
    //   <div className='my-container'>
    //     <header className='lg:text-center'>
    //       <h2 className='text-base font-semibold tracking-wide uppercase text-primary'>
    //         About
    //       </h2>
    //       <p className='mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl'>
    //         Our community is centered around Discord
    //       </p>
    //       <p className='max-w-2xl mt-4 text-xl text-gray-500 lg:mx-auto'>
    //         Meetings on Thursdays at 7:00pm in the General Voice Chat. Possimus
    //         magnam voluptatum cupiditate veritatis in accusamus quisquam.
    //       </p>
    //     </header>
    //     <div className='mt-10'>
    //       <dl className='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10'>
    //         <div className='relative'>
    //           <dt>
    //             <div className='absolute flex items-center justify-center w-12 h-12 text-white rounded-md bg-primary'>
    //               {/* Heroicon name: outline/globe-alt */}
    //               <svg
    //                 className='w-6 h-6'
    //                 xmlns='http://www.w3.org/2000/svg'
    //                 fill='none'
    //                 viewBox='0 0 24 24'
    //                 stroke='currentColor'
    //                 aria-hidden='true'
    //               >
    //                 <path
    //                   strokeLinecap='round'
    //                   strokeLinejoin='round'
    //                   strokeWidth={2}
    //                   d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
    //                 />
    //               </svg>
    //             </div>
    //             <p className='ml-16 text-lg font-medium leading-6 text-gray-900'>
    //               Competitive exchange rates
    //             </p>
    //           </dt>
    //           <dd className='mt-2 ml-16 text-base text-gray-500'>
    //             Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    //             Maiores impedit perferendis suscipit eaque, iste dolor
    //             cupiditate blanditiis ratione.
    //           </dd>
    //         </div>
    //         <div className='relative'>
    //           <dt>
    //             <div className='absolute flex items-center justify-center w-12 h-12 text-white rounded-md bg-primary'>
    //               {/* Heroicon name: outline/scale */}
    //               <svg
    //                 className='w-6 h-6'
    //                 xmlns='http://www.w3.org/2000/svg'
    //                 fill='none'
    //                 viewBox='0 0 24 24'
    //                 stroke='currentColor'
    //                 aria-hidden='true'
    //               >
    //                 <path
    //                   strokeLinecap='round'
    //                   strokeLinejoin='round'
    //                   strokeWidth={2}
    //                   d='M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3'
    //                 />
    //               </svg>
    //             </div>
    //             <p className='ml-16 text-lg font-medium leading-6 text-gray-900'>
    //               No hidden fees
    //             </p>
    //           </dt>
    //           <dd className='mt-2 ml-16 text-base text-gray-500'>
    //             Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    //             Maiores impedit perferendis suscipit eaque, iste dolor
    //             cupiditate blanditiis ratione.
    //           </dd>
    //         </div>
    //         <div className='relative'>
    //           <dt>
    //             <div className='absolute flex items-center justify-center w-12 h-12 text-white rounded-md bg-primary'>
    //               {/* Heroicon name: outline/lightning-bolt */}
    //               <svg
    //                 className='w-6 h-6'
    //                 xmlns='http://www.w3.org/2000/svg'
    //                 fill='none'
    //                 viewBox='0 0 24 24'
    //                 stroke='currentColor'
    //                 aria-hidden='true'
    //               >
    //                 <path
    //                   strokeLinecap='round'
    //                   strokeLinejoin='round'
    //                   strokeWidth={2}
    //                   d='M13 10V3L4 14h7v7l9-11h-7z'
    //                 />
    //               </svg>
    //             </div>
    //             <p className='ml-16 text-lg font-medium leading-6 text-gray-900'>
    //               Transfers are instant
    //             </p>
    //           </dt>
    //           <dd className='mt-2 ml-16 text-base text-gray-500'>
    //             Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    //             Maiores impedit perferendis suscipit eaque, iste dolor
    //             cupiditate blanditiis ratione.
    //           </dd>
    //         </div>
    //         <div className='relative'>
    //           <dt>
    //             <div className='absolute flex items-center justify-center w-12 h-12 text-white rounded-md bg-primary'>
    //               {/* Heroicon name: outline/annotation */}
    //               <svg
    //                 className='w-6 h-6'
    //                 xmlns='http://www.w3.org/2000/svg'
    //                 fill='none'
    //                 viewBox='0 0 24 24'
    //                 stroke='currentColor'
    //                 aria-hidden='true'
    //               >
    //                 <path
    //                   strokeLinecap='round'
    //                   strokeLinejoin='round'
    //                   strokeWidth={2}
    //                   d='M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z'
    //                 />
    //               </svg>
    //             </div>
    //             <p className='ml-16 text-lg font-medium leading-6 text-gray-900'>
    //               Mobile notifications
    //             </p>
    //           </dt>
    //           <dd className='mt-2 ml-16 text-base text-gray-500'>
    //             Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    //             Maiores impedit perferendis suscipit eaque, iste dolor
    //             cupiditate blanditiis ratione.
    //           </dd>
    //         </div>
    //       </dl>
    //     </div>
    //   </div>
    // </section>
    <section id='about' className='relative py-16 overflow-hidden'>
      <header className='mb-16 lg:text-center my-container'>
        <h2 className='text-base font-semibold tracking-wide uppercase text-primary'>
          About
        </h2>
        <p className='mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl'>
          Our community is centered around Discord
        </p>
        <p className='max-w-4xl mt-4 text-xl text-gray-500 lg:mx-auto'>
          Meetings on Thursdays at 7:00pm in the General Voice Chat. Possimus
          magnam voluptatum cupiditate veritatis in accusamus quisquam.
        </p>
      </header>
      <section className=''>
        <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24'>
          <div className='max-w-xl px-4 mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2'>
            <div>
              <div>
                <span className='flex items-center justify-center w-12 h-12 rounded-md bg-primary'>
                  <SparklesIcon
                    className='w-6 h-6 text-white'
                    aria-hidden='true'
                  />
                </span>
              </div>
              <div className='mt-6'>
                <h3 className='text-3xl font-extrabold tracking-tight text-gray-900'>
                  Discussions with your peers
                </h3>
                <p className='mt-4 text-lg text-gray-500'>
                  Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis
                  bibendum malesuada faucibus lacinia porttitor. Pulvinar
                  laoreet sagittis viverra duis. In venenatis sem arcu pretium
                  pharetra at. Lectus viverra dui tellus ornare pharetra.
                </p>
                <div className='mt-6'>
                  <a
                    href='#'
                    className='inline-flex px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-primary hover:bg-primary-light'
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-12 sm:mt-16 lg:mt-0 lg:col-start-1'>
            <div className='pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full'>
              <img
                className='w-full shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none'
                src='/discord-chat-light.png'
                alt='Customer profile user interface'
              />
            </div>
          </div>
        </div>
      </section>
      <section className='relative mt-24'>
        <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24'>
          <div className='max-w-xl px-4 mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0'>
            <div>
              <div>
                <span className='flex items-center justify-center w-12 h-12 rounded-md bg-primary'>
                  <InboxIcon
                    className='w-6 h-6 text-white'
                    aria-hidden='true'
                  />
                </span>
              </div>
              <div className='mt-6'>
                <h3 className='text-3xl font-extrabold tracking-tight text-gray-900'>
                  Talks from members and guests
                </h3>
                <p className='mt-4 text-lg text-gray-500'>
                  Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis
                  bibendum malesuada faucibus lacinia porttitor. Pulvinar
                  laoreet sagittis viverra duis. In venenatis sem arcu pretium
                  pharetra at. Lectus viverra dui tellus ornare pharetra.
                </p>
                <div className='mt-6'>
                  <a
                    href='#'
                    className='inline-flex px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-primary hover:bg-primary-light'
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
            <div className='pt-6 mt-8 border-t border-gray-200'>
              <blockquote>
                <div>
                  <p className='text-base text-gray-500'>
                    &ldquo;Cras velit quis eros eget rhoncus lacus ultrices sed
                    diam. Sit orci risus aenean curabitur donec aliquet. Mi
                    venenatis in euismod ut.&rdquo;
                  </p>
                </div>
                <footer className='mt-3'>
                  <div className='flex items-center space-x-3'>
                    <div className='flex-shrink-0'>
                      <img
                        className='w-6 h-6 rounded-full'
                        src='https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
                        alt=''
                      />
                    </div>
                    <div className='text-base font-medium text-gray-700'>
                      Marcia Hill, Digital Marketing Manager
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className='mt-12 sm:mt-16 lg:mt-0'>
            <div className='pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full'>
              <img
                className='w-full shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none'
                src='/discord-chat-light.png'
                alt='Inbox user interface'
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
