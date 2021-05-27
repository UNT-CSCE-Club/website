import React from 'react';
import { FiUser } from 'react-icons/fi';
import { IOfficersFields } from 'types/generated/contentful';

interface OfficersProps {
  data: IOfficersFields;
}

const Officers = ({ data }: OfficersProps) => {
  const { title, description, officers } = data;

  return (
    <section id='officers'>
      <div className='py-12 my-container lg:py-24'>
        <div className='grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8'>
          <header className='space-y-5 sm:space-y-4'>
            <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl dark:text-gray-50'>
              {title}
            </h2>
            <p className='text-xl text-gray-500 dark:text-gray-300'>
              {description}
            </p>
          </header>
          <div className='lg:col-span-2'>
            <ul className='space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8'>
              {officers.map(officer => (
                <li key={officer.sys.id}>
                  <div className='flex items-center space-x-4 lg:space-x-6'>
                    {officer.fields.profilePic ? (
                      <img
                        className='object-cover w-16 h-16 rounded-full lg:w-20 lg:h-20'
                        src={`https:${officer.fields.profilePic['fields'].file.url}?w=200`}
                        alt={officer.fields.profilePic['fields'].title}
                        loading='lazy'
                        width={
                          officer.fields.profilePic['fields'].file.details.image
                            .width
                        }
                        height={
                          officer.fields.profilePic['fields'].file.details.image
                            .height
                        }
                      />
                    ) : (
                      <FiUser className='w-16 h-16 rounded full lg:w-20 lg:h-20' />
                    )}
                    <div className='space-y-1 text-lg font-medium leading-6'>
                      <h3 className='dark:text-gray-50'>
                        {officer.fields.name}
                      </h3>
                      <p className='text-primary dark:text-primary-light'>
                        {officer.fields.title}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Officers;
