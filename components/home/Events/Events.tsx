import React from 'react';
import { DynamicIcon } from 'components/ui';
import { EventsFields } from 'types';

interface EventsProps {
  data: EventsFields;
}

const Events = ({ data }: EventsProps) => {
  const { title, description, eventsList } = data;

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
        <div className='mt-10 flex flex-col'>
          <dl className='space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:ml-10 lg:max-w-5xl lg:self-center'>
            {eventsList.map((e, index) => {
              return (
                <div key={e.sys.id}>
                  <dt>
                    <div className='flex items-center justify-center w-12 h-12 text-white rounded-md bg-primary dark:shadow-2xl'>
                      <DynamicIcon
                        name={e.fields.icon as string}
                        className='w-6 h-6'
                        aria-hidden='true'
                      />
                    </div>
                    <p className='mt-5 text-lg font-medium leading-6 text-gray-900 dark:text-gray-50'>
                      {e.fields.title}
                    </p>
                  </dt>
                  <dd className='mt-2 text-base text-gray-500 dark:text-gray-300'>
                    {e.fields.description}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Events;
