import React from 'react';
import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
} from '@heroicons/react/outline';

const features = [
  { name: 'Game Development', icon: CloudUploadIcon },
  { name: 'Dogecoin 2.0', icon: LockClosedIcon },
  { name: 'Crypto Investments', icon: RefreshIcon },
  { name: 'AI / Machine Learning', icon: ShieldCheckIcon },
  { name: 'Data Science', icon: CogIcon },
  { name: 'Web Development', icon: ServerIcon },
];

const Workshops = () => {
  return (
    <section id='workshops' className='py-12'>
      <div className='my-container'>
        <header className='lg:text-center'>
          <h2 className='text-base font-semibold tracking-wide uppercase text-primary'>
            Workshops
          </h2>
          <p className='mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl'>
            Learn about computer science topics
          </p>
          <p className='max-w-4xl mt-4 text-xl text-gray-500 lg:mx-auto'>
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </header>
        <div className='mx-auto mt-10 text-center'>
          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {features.map(feature => (
              <div key={feature.name} className='pt-6'>
                <div className='flow-root px-6 pb-8 bg-white rounded-lg shadow-lg'>
                  <div className='-mt-6'>
                    <div>
                      <span className='inline-flex items-center justify-center p-3 rounded-md shadow-lg bg-primary'>
                        <feature.icon
                          className='w-6 h-6 text-white'
                          aria-hidden='true'
                        />
                      </span>
                    </div>
                    <h3 className='mt-8 text-lg font-medium tracking-tight text-gray-900'>
                      {feature.name}
                    </h3>
                    <p className='mt-5 text-base text-gray-500'>
                      Ac tincidunt sapien vehicula erat auctor pellentesque
                      rhoncus. Et magna sit morbi lobortis.
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
