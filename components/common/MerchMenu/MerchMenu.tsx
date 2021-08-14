import React, { Fragment } from 'react';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import { Category } from '@chec/commerce.js/types/category';
import { classNames } from 'lib/utils/classNames';
import isMerchRoute from 'lib/utils/isMerchRoute';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';

interface Props {
  categories: Category[] | null;
}

const MerchMenu = ({ categories }: Props) => {
  return (
    <Popover className='relative inline-flex items-center'>
      {({ open, close }) => (
        <>
          <Popover.Button
            className={classNames(
              open
                ? 'text-gray-900 dark:text-gray-50'
                : 'text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100',
              isMerchRoute() ? 'border-primary' : 'border-transparent',
              // 'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              'group inline-flex items-center px-1 pt-1 text-base font-medium border-b-2 h-full'
            )}
          >
            <span>Merch</span>
            {open ? (
              <ChevronUpIcon className='w-5 h-5 ml-2' aria-hidden='true' />
            ) : (
              <ChevronDownIcon className='w-5 h-5 ml-2' aria-hidden='true' />
            )}
          </Popover.Button>

          <Transition
            show={open}
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <Popover.Panel
              static
              className='absolute z-10 w-screen max-w-md px-2 mt-2 transform -translate-x-1/2 top-16 left-1/2 sm:px-0'
            >
              <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                <div className='relative px-5 py-6 bg-white sm:p-8'>
                  <div className='relative overflow-hidden bg-gray-100 rounded-md group aspect-w-2 aspect-h-1'>
                    <img
                      src='https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg'
                      alt='Merch page image'
                      className='object-cover object-center group-hover:opacity-75'
                    />
                    <div className='flex flex-col justify-end'>
                      <div className='p-4 text-sm bg-white bg-opacity-60'>
                        <Link href='/merch'>
                          <a
                            onClick={() => close()}
                            className='font-medium text-gray-900'
                          >
                            <span
                              className='absolute inset-0'
                              aria-hidden='true'
                            />
                            Check out the store
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='px-5 py-5 bg-gray-50 sm:px-8 sm:py-8'>
                  <div>
                    <h3 className='text-sm font-medium tracking-wide text-gray-500 uppercase'>
                      Categories
                    </h3>
                    {categories ? (
                      <ul className='grid grid-cols-3 mt-4 gap-y-4 gap-x-2'>
                        {categories.map(category => (
                          <li key={category.id} className='text-base truncate'>
                            <Link href={`/merch/categories/${category.slug}`}>
                              <a
                                onClick={() => close()}
                                className='font-medium text-gray-900 transition duration-150 ease-in-out hover:text-gray-700'
                              >
                                {category.name}
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className='mt-4'>Loading...</p>
                    )}
                  </div>
                  <div className='mt-5 text-sm'>
                    <Link href='/merch/products'>
                      <a
                        onClick={() => close()}
                        className='font-medium transition duration-150 ease-in-out text-primary hover:text-primary-light'
                      >
                        {' '}
                        View all products <span aria-hidden='true'>&rarr;</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default MerchMenu;
