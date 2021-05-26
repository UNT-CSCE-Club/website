import React from 'react';
import { LockClosedIcon } from '@heroicons/react/outline';
import { BiBitcoin, BiGame } from 'react-icons/bi';
import { FiBarChart2 } from 'react-icons/fi';
import { CgWebsite } from 'react-icons/cg';
import { FaRobot } from 'react-icons/fa';

const features = [
  {
    name: 'Game Development',
    icon: BiGame,
    description:
      'Build your own video game from the ground up, using the same language as your coursework (C++).',
  },
  {
    name: 'Dogecoin 2.0',
    icon: LockClosedIcon,
    description:
      'Stay up to date with all of the latest information about Dogecoin. Follow the journey to the moon!',
  },
  {
    name: 'Crypto Investments',
    icon: BiBitcoin,
    description:
      'Explore the basics of cryptocurrencies and strategies for how to get started with investing.',
  },
  {
    name: 'AI / Machine Learning',
    icon: FaRobot,
    description:
      'Dive in to the world of AI and Machine Learning by by training your own model on real world data.',
  },
  {
    name: 'Data Science',
    icon: FiBarChart2,
    description:
      'Use scientific methods and systems to extract knowledge and insights from structured and unstructured data.',
  },
  {
    name: 'Web Development',
    icon: CgWebsite,
    description:
      'Learn the basics of web development by building your own website from scratch, using HTML5 and CSS3.',
  },
];

const Workshops = ({ data }) => {
  return (
    <section id='workshops' className='py-12'>
      <div className='my-container'>
        <header className='lg:text-center'>
          <h2 className='text-base font-semibold tracking-wide uppercase text-primary dark:text-primary-light'>
            Workshops
          </h2>
          <p className='mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl'>
            Learn about computer science topics
          </p>
          <p className='max-w-4xl mt-4 text-xl text-gray-500 lg:mx-auto dark:text-gray-300'>
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </header>
        <div className='mx-auto mt-10 text-center'>
          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {features.map(feature => (
              <div key={feature.name} className='pt-6'>
                <div className='flow-root px-6 pb-8 bg-white rounded-lg shadow-lg dark:bg-gray-900 dark:shadow-2xl'>
                  <div className='-mt-6'>
                    <div>
                      <span className='inline-flex items-center justify-center p-3 rounded-md shadow-lg bg-primary dark:shadow-2xl'>
                        {feature.name === 'Dogecoin 2.0' ? (
                          <img
                            src='/vectors/doge.svg'
                            alt='Doge icon'
                            className='w-6 h-6'
                          />
                        ) : (
                          <feature.icon
                            className='w-6 h-6 text-white'
                            aria-hidden='true'
                          />
                        )}
                      </span>
                    </div>
                    <h3 className='mt-8 text-lg font-medium tracking-tight text-gray-900 dark:text-gray-50'>
                      {feature.name}
                    </h3>
                    <p className='mt-5 text-base text-gray-500 dark:text-gray-300'>
                      {feature.description}
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
