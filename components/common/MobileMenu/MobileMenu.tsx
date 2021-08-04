import React, { Fragment } from 'react';
import Link from 'next/link';
import { Transition, Dialog, Disclosure } from '@headlessui/react';
import { classNames } from 'lib/utils/classNames';
import { SiDiscord } from 'react-icons/si';
import {
  FiCalendar,
  FiChevronDown,
  FiChevronsRight,
  FiChevronUp,
  FiInfo,
  FiMessageSquare,
  FiUsers,
} from 'react-icons/fi';
import { IoShirtOutline } from 'react-icons/io5';
import { Logo, ShoppingCartButton, ThemeChanger } from 'components/ui';

import { XIcon } from '@heroicons/react/outline';
import isMerchRoute from 'lib/utils/isMerchRoute';

interface MobileMenuProps {
  show: boolean;
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
  currentIndex: number;
}

const MobileMenu = ({ show, toggle, currentIndex }: MobileMenuProps) => {
  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog
        as='div'
        static
        className='fixed inset-0 z-40 flex md:hidden'
        open={show}
        onClose={toggle}
      >
        <Transition.Child
          as={Fragment}
          enter='transition-opacity ease-linear duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity ease-linear duration-300'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Dialog.Overlay className='fixed inset-0 bg-gray-600 bg-opacity-75' />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter='transition ease-in-out duration-300 transform'
          enterFrom='-translate-x-full'
          enterTo='translate-x-0'
          leave='transition ease-in-out duration-300 transform'
          leaveFrom='translate-x-0'
          leaveTo='-translate-x-full'
        >
          <div className='relative flex flex-col flex-1 w-full max-w-[16.5rem] xs:max-w-xs bg-white divide-y-2 shadow-2xl dark:bg-gray-800 dark:divide-gray-700 ring-1 ring-black ring-opacity-5 dark:ring-gray-600 divide-gray-50'>
            <Transition.Child
              as={Fragment}
              enter='ease-in-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in-out duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='absolute top-0 right-0 pt-2 -mr-12'>
                <button
                  className='flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white'
                  onClick={() => toggle(false)}
                >
                  <span className='sr-only'>Close sidebar</span>
                  <XIcon className='w-6 h-6 text-white' aria-hidden='true' />
                </button>
              </div>
            </Transition.Child>
            <div className='flex-1 h-0 px-5 pt-5 pb-4 overflow-y-auto'>
              <div className='flex items-center justify-between'>
                <Link href='/'>
                  <a
                    onClick={() => toggle(false)}
                    className='flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700'
                  >
                    <Logo className='w-9 h-9' />
                    <div className='ml-4 text-xl font-bold text-gray-900 dark:text-gray-50'>
                      UNT CSCE Club
                    </div>
                  </a>
                </Link>
              </div>
              <div className='mt-6'>
                <nav className='grid grid-cols-1 gap-7'>
                  <Link href='/#about'>
                    <a
                      onClick={() => toggle(false)}
                      className={classNames(
                        'flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700',
                        currentIndex === 1
                          ? 'bg-gray-100 dark:bg-gray-900'
                          : 'bg-white dark:bg-gray-800'
                      )}
                    >
                      <div className='flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-md bg-primary'>
                        <FiInfo className='w-6 h-6' />
                      </div>
                      <div className='ml-4 text-base font-medium text-gray-900 dark:text-gray-50'>
                        About the Club
                      </div>
                    </a>
                  </Link>
                  <Link href='/#events'>
                    <a
                      onClick={() => toggle(false)}
                      className={classNames(
                        'flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700',
                        currentIndex === 2
                          ? 'bg-gray-100 dark:bg-gray-900'
                          : 'bg-white dark:bg-gray-800'
                      )}
                    >
                      <div className='flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-md bg-primary'>
                        <FiCalendar className='w-6 h-6' />
                      </div>
                      <div className='ml-4 text-base font-medium text-gray-900 dark:text-gray-50'>
                        Events
                      </div>
                    </a>
                  </Link>
                  <Link href='/#workshops'>
                    <a
                      onClick={() => toggle(false)}
                      className={classNames(
                        'flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700',
                        currentIndex === 3
                          ? 'bg-gray-100 dark:bg-gray-900'
                          : 'bg-white dark:bg-gray-800'
                      )}
                    >
                      <div className='flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-md bg-primary'>
                        <FiChevronsRight className='w-6 h-6' />
                      </div>
                      <div className='ml-4 text-base font-medium text-gray-900 dark:text-gray-50'>
                        Workshops
                      </div>
                    </a>
                  </Link>
                  <Link href='/#officers'>
                    <a
                      onClick={() => toggle(false)}
                      className={classNames(
                        'flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700',
                        currentIndex === 4
                          ? 'bg-gray-100 dark:bg-gray-900'
                          : 'bg-white dark:bg-gray-800'
                      )}
                    >
                      <div className='flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-md bg-primary'>
                        <FiUsers className='w-6 h-6' />
                      </div>
                      <div className='ml-4 text-base font-medium text-gray-900 dark:text-gray-50'>
                        Meet the Officers
                      </div>
                    </a>
                  </Link>
                  <Link href='/#contact'>
                    <a
                      onClick={() => toggle(false)}
                      className={classNames(
                        'flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700',
                        currentIndex === 5
                          ? 'bg-gray-100 dark:bg-gray-900'
                          : 'bg-white dark:bg-gray-800'
                      )}
                    >
                      <div className='flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-md bg-primary'>
                        <FiMessageSquare className='w-6 h-6' />
                      </div>
                      <div className='ml-4 text-base font-medium text-gray-900 dark:text-gray-50'>
                        Contact Us
                      </div>
                    </a>
                  </Link>
                  <Disclosure
                    as='div'
                    defaultOpen={isMerchRoute()}
                    className={classNames(
                      'p-3 -m-3 rounded-lg',
                      isMerchRoute()
                        ? 'bg-gray-100 dark:bg-gray-900'
                        : 'bg-white dark:bg-gray-800'
                    )}
                  >
                    {({ open }) => (
                      <>
                        <div className='flex justify-between'>
                          <Link href='/merch'>
                            <a
                              onClick={() => toggle(false)}
                              className={classNames(
                                'flex w-full items-center p-3 -ml-3 -mt-3 -mb-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700',
                                isMerchRoute()
                                  ? 'bg-gray-100 dark:bg-gray-900'
                                  : 'bg-white dark:bg-gray-800'
                              )}
                            >
                              <div className='flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-md bg-primary'>
                                <IoShirtOutline className='w-6 h-6' />
                              </div>
                              <div className='ml-4 text-base font-medium text-gray-900 dark:text-gray-50'>
                                Merch
                              </div>
                            </a>
                          </Link>
                          <div className='flex items-center -mr-2 sm:hidden'>
                            {/* Open merch options button */}
                            <Disclosure.Button className='inline-flex items-center justify-center px-3 py-2 text-gray-400 rounded-md'>
                              <span className='sr-only'>Open merch menu</span>
                              {open ? (
                                <FiChevronUp
                                  className='block w-6 h-6'
                                  aria-hidden='true'
                                />
                              ) : (
                                <FiChevronDown
                                  className='block w-6 h-6'
                                  aria-hidden='true'
                                />
                              )}
                            </Disclosure.Button>
                          </div>
                        </div>
                        <Disclosure.Panel className='sm:hidden'>
                          <div className='pt-4 pb-3 space-y-1'>
                            {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                            <Link href='/merch/products'>
                              <a
                                className={classNames(
                                  'block py-2 pl-2 pr-4 text-base font-medium text-gray-900 border-l-4 border-transparent rounded-lg dark:text-gray-50',
                                  currentIndex === 7 &&
                                    'bg-white dark:bg-gray-800'
                                )}
                                onClick={() => toggle(false)}
                              >
                                All Products
                              </a>
                            </Link>
                            <Link href='/merch/categories'>
                              <a
                                className={classNames(
                                  'block py-2 pl-2 pr-4 text-base font-medium text-gray-900 border-l-4 border-transparent rounded-lg dark:text-gray-50',
                                  currentIndex === 8 &&
                                    'bg-white dark:bg-gray-800'
                                )}
                                onClick={() => toggle(false)}
                              >
                                Categories
                              </a>
                            </Link>
                            <Link href='/merch/categories/accessories'>
                              <a
                                className={classNames(
                                  'block py-2 pl-2 pr-4 text-base font-medium text-gray-900 border-l-4 border-transparent rounded-lg dark:text-gray-50',
                                  currentIndex === 9 &&
                                    'bg-white dark:bg-gray-800'
                                )}
                                onClick={() => toggle(false)}
                              >
                                Accessories
                              </a>
                            </Link>
                            <Link href='/merch/categories/apparel'>
                              <a
                                className={classNames(
                                  'block py-2 pl-2 pr-4 text-base font-medium text-gray-900 border-l-4 border-transparent rounded-lg dark:text-gray-50',
                                  currentIndex === 10 &&
                                    'bg-white dark:bg-gray-800'
                                )}
                                onClick={() => toggle(false)}
                              >
                                Apparel
                              </a>
                            </Link>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </nav>
              </div>
            </div>
            <div className='flex-shrink-0 px-5 py-6 border-t border-gray-200'>
              <a
                href={process.env.NEXT_PUBLIC_DISCORD_INVITE_URL}
                target='_blank'
                rel='noopener'
                className='flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-primary hover:bg-primary-dark'
                onClick={() => toggle(false)}
              >
                <SiDiscord className='mr-2' />
                Join the Discord
              </a>
              <span className='flex justify-center mt-6 space-x-8 text-base font-medium text-center text-gray-500'>
                <ThemeChanger className='text-gray-500 rounded dark:text-gray-300 hover:text-gray-500' />
                <a
                  href={process.env.NEXT_PUBLIC_TWITTER_URL}
                  target='_blank'
                  rel='noopener'
                  title='UNT CSCE Club Twitter'
                  className='text-gray-400 rounded hover:text-gray-500'
                  onClick={() => toggle(false)}
                >
                  <svg
                    className='w-6 h-6'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
                  </svg>
                </a>
                <a
                  href={process.env.NEXT_PUBLIC_INSTAGRAM_URL}
                  target='_blank'
                  rel='noopener'
                  title='UNT CSCE Club Instagram'
                  className='text-gray-400 rounded hover:text-gray-500'
                  onClick={() => toggle(false)}
                >
                  <svg
                    className='w-6 h-6'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                      clipRule='evenodd'
                    />
                  </svg>
                </a>
                <a
                  href='https://github.com/UNT-CSCE-Club'
                  target='_blank'
                  rel='noopener'
                  title='UNT CSCE Club GitHub'
                  className='text-gray-400 rounded hover:text-gray-500'
                  onClick={() => toggle(false)}
                >
                  <svg
                    className='w-6 h-6'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                      clipRule='evenodd'
                    />
                  </svg>
                </a>
                <ShoppingCartButton
                  className='text-gray-500 rounded dark:text-gray-300 hover:text-gray-500'
                  onClick={() => toggle(false)}
                />
              </span>
            </div>
          </div>
        </Transition.Child>
        <div className='flex-shrink-0 w-14'>
          {/* Force sidebar to shrink to fit close icon */}
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default MobileMenu;
