import React from 'react';
import { FiCode, FiFlag, FiLinkedin } from 'react-icons/fi';
import { IEventsFields } from 'types/generated/contentful';

const features = [
  {
    name: 'Hackathons',
    description:
      'Students with different technical backgrounds come together, form teams around a problem or idea, and collaboratively code a unique solution from scratch.',
    icon: FiCode,
  },
  {
    name: 'Cyber Security CTF',
    description:
      'Capture The Flags are a kind of computer security competition. Teams of competitors (or just individuals) are pitted against each other in a test of computer security skill.',
    icon: FiFlag,
  },
  {
    name: 'LinkedIn Learning',
    description:
      'LinkedIn Learning provides video courses that help you learn business, creative, and technology skills to achieve your personal and professional goals.',
    icon: FiLinkedin,
  },
];

interface EventsProps {
  data: IEventsFields;
}

const Events = ({ data }: EventsProps) => {
  const { title, description, eventsList } = data;
  console.log(eventsList);

  return (
    <section id='events' className='py-12'>
      <div className='my-container'>
        <header className='lg:text-center'>
          <h2 className='text-base font-semibold tracking-wide uppercase text-primary dark:text-primary-light'>
            Events
          </h2>
          <p className='mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl'>
            {title}
          </p>
          <p className='max-w-4xl mt-4 text-xl text-gray-500 dark:text-gray-300 lg:mx-auto'>
            {description}
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
