import React from 'react';

const people = [
  {
    name: 'Meg M',
    role: 'President',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Kobe E',
    role: 'Vice President',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Oriana B',
    role: 'Secretary',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Mario T',
    role: 'Social Media Manager',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Caden C',
    role: 'Public Relations',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'David C',
    role: 'Treasurer / Game Dev',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Zach Scroggins',
    role: 'Web Development',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

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
              {people.map(person => (
                <li key={person.name}>
                  <div className='flex items-center space-x-4 lg:space-x-6'>
                    <img
                      className='w-16 h-16 rounded-full lg:w-20 lg:h-20'
                      src={person.imageUrl}
                      alt=''
                    />
                    <div className='space-y-1 text-lg font-medium leading-6'>
                      <h3>{person.name}</h3>
                      <p className='text-primary'>{person.role}</p>
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
