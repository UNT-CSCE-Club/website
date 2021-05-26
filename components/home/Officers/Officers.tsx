import React from 'react';
import { FiUser } from 'react-icons/fi';

interface Person {
  name: string;
  role: string;
  image?: string;
}

const people: Person[] = [
  {
    name: 'Meg M',
    role: 'President',
  },
  {
    name: 'Kobe E',
    role: 'Vice President',
  },
  {
    name: 'Oriana B',
    role: 'Secretary',
  },
  {
    name: 'Mario T',
    role: 'Social Media Manager',
  },
  {
    name: 'Caden C',
    role: 'Public Relations',
  },
  {
    name: 'David C',
    role: 'Treasurer / Game Dev',
  },
  {
    name: 'Zach Scroggins',
    role: 'Web Development',
  },
];

const Officers = ({ data }) => {
  return (
    <section id='officers'>
      <div className='py-12 my-container lg:py-24'>
        <div className='grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8'>
          <header className='space-y-5 sm:space-y-4'>
            <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl dark:text-gray-50'>
              Meet our officers
            </h2>
            <p className='text-xl text-gray-500 dark:text-gray-300'>
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio
              vitae elementum enim vitae ullamcorper suspendisse. Vivamus
              fringilla.
            </p>
          </header>
          <div className='lg:col-span-2'>
            <ul className='space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8'>
              {people.map(person => (
                <li key={person.name}>
                  <div className='flex items-center space-x-4 lg:space-x-6'>
                    {person.image ? (
                      <img
                        className='w-16 h-16 rounded-full lg:w-20 lg:h-20'
                        src={person.image}
                        alt=''
                      />
                    ) : (
                      <FiUser className='w-16 h-16 rounded full lg:w-20 lg:h-20' />
                    )}

                    <div className='space-y-1 text-lg font-medium leading-6'>
                      <h3 className='dark:text-gray-50'>{person.name}</h3>
                      <p className='text-primary dark:text-primary-light'>
                        {person.role}
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
