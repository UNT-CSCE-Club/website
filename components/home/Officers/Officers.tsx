import React from 'react';

const Officers = () => {
  return (
    <section id='officers'>
      <div className='py-12 my-container lg:py-24'>
        <div className='grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8'>
          <header className='space-y-5 sm:space-y-4'>
            <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>
              Meet our officers
            </h2>
            <p className='text-xl text-gray-500'>
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio
              vitae elementum enim vitae ullamcorper suspendisse. Vivamus
              fringilla.
            </p>
          </header>
          <div className='lg:col-span-2'>
            <ul className='space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8'>
              <li>
                <div className='flex items-center space-x-4 lg:space-x-6'>
                  <img
                    className='w-16 h-16 rounded-full lg:w-20 lg:h-20'
                    src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=jjcbxallJd&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                  <div className='space-y-1 text-lg font-medium leading-6'>
                    <h3>Leslie Alexander</h3>
                    <p className='text-primary'>Co-Founder / CEO</p>
                  </div>
                </div>
              </li>
              <li>
                <div className='flex items-center space-x-4 lg:space-x-6'>
                  <img
                    className='w-16 h-16 rounded-full lg:w-20 lg:h-20'
                    src='https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=jjcbxallJd&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                  <div className='space-y-1 text-lg font-medium leading-6'>
                    <h3>Michael Foster</h3>
                    <p className='text-primary'>Co-Founder / CTO</p>
                  </div>
                </div>
              </li>
              <li>
                <div className='flex items-center space-x-4 lg:space-x-6'>
                  <img
                    className='w-16 h-16 rounded-full lg:w-20 lg:h-20'
                    src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixqx=jjcbxallJd&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                  <div className='space-y-1 text-lg font-medium leading-6'>
                    <h3>Dries Vincent</h3>
                    <p className='text-primary'>Manager, Business Relations</p>
                  </div>
                </div>
              </li>
              <li>
                <div className='flex items-center space-x-4 lg:space-x-6'>
                  <img
                    className='w-16 h-16 rounded-full lg:w-20 lg:h-20'
                    src='https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixqx=jjcbxallJd&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                  <div className='space-y-1 text-lg font-medium leading-6'>
                    <h3>Lindsay Walton</h3>
                    <p className='text-primary'>Front-end Developer</p>
                  </div>
                </div>
              </li>
              <li>
                <div className='flex items-center space-x-4 lg:space-x-6'>
                  <img
                    className='w-16 h-16 rounded-full lg:w-20 lg:h-20'
                    src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixqx=jjcbxallJd&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                  <div className='space-y-1 text-lg font-medium leading-6'>
                    <h3>Courtney Henry</h3>
                    <p className='text-primary'>Designer</p>
                  </div>
                </div>
              </li>
              <li>
                <div className='flex items-center space-x-4 lg:space-x-6'>
                  <img
                    className='w-16 h-16 rounded-full lg:w-20 lg:h-20'
                    src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=jjcbxallJd&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                  <div className='space-y-1 text-lg font-medium leading-6'>
                    <h3>Tom Cook</h3>
                    <p className='text-primary'>
                      Director, Product Development
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Officers;
