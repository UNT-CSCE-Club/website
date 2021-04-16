import React from 'react';
import { FiCode, FiFlag, FiLinkedin } from 'react-icons/fi';

const features = [
  {
    name: 'Hackathons',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: FiCode,
  },
  {
    name: 'Cyber Security CTF',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: FiFlag,
  },
  {
    name: 'LinkedIn Learning',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: FiLinkedin,
  },
];

const Events = () => {
  return (
    <section id='events' className='py-12'>
      <div className='my-container'>
        <header className='lg:text-center'>
          <h2 className='text-base font-semibold tracking-wide uppercase text-primary dark:text-primary-light'>
            Events
          </h2>
          <p className='mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl'>
            Lorem ipsum dolor sit amet consectetur
          </p>
          <p className='max-w-4xl mt-4 text-xl text-gray-500 dark:text-gray-300 lg:mx-auto'>
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </header>
        <div className='mt-10'>
          <dl className='space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8'>
            {features.map(feature => (
              <div key={feature.name}>
                <dt>
                  <div className='flex items-center justify-center w-12 h-12 text-white rounded-md bg-primary dark:shadow-2xl'>
                    <feature.icon className='w-6 h-6' aria-hidden='true' />
                  </div>
                  <p className='mt-5 text-lg font-medium leading-6 text-gray-900 dark:text-gray-50'>
                    {feature.name}
                  </p>
                </dt>
                <dd className='mt-2 text-base text-gray-500 dark:text-gray-300'>
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Events;
