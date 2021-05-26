import React from 'react';
import { IWorkshopsFields } from 'types/generated/contentful';
import { DynamicIcon } from 'components/ui';

interface WorkshopsProps {
  data: IWorkshopsFields;
}

const Workshops = ({ data }: WorkshopsProps) => {
  const { title, description, workshops } = data;

  return (
    <section id='workshops' className='py-12'>
      <div className='my-container'>
        <header className='lg:text-center'>
          <h2 className='text-base font-semibold tracking-wide uppercase text-primary dark:text-primary-light'>
            Workshops
          </h2>
          <p className='mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl'>
            {title}
          </p>
          <p className='max-w-4xl mt-4 text-xl text-gray-500 lg:mx-auto dark:text-gray-300'>
            {description}
          </p>
        </header>
        <div className='mx-auto mt-10 text-center'>
          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {workshops.map(workshop => (
              <div key={workshop.sys.id} className='pt-6'>
                <div className='flow-root px-6 pb-8 bg-white rounded-lg shadow-lg dark:bg-gray-900 dark:shadow-2xl'>
                  <div className='-mt-6'>
                    <div>
                      <span className='inline-flex items-center justify-center p-3 rounded-md shadow-lg bg-primary dark:shadow-2xl'>
                        <DynamicIcon
                          name={workshop.fields.icon as string}
                          className='w-6 h-6 text-white'
                          aria-hidden='true'
                        />
                      </span>
                    </div>
                    <h3 className='mt-8 text-lg font-medium tracking-tight text-gray-900 dark:text-gray-50'>
                      {workshop.fields.title}
                    </h3>
                    <p className='mt-5 text-base text-gray-500 dark:text-gray-300'>
                      {workshop.fields.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workshops;
