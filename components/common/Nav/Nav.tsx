import React from 'react';
import Link from 'next/link';
import useNav from './useNav';
import { classNames } from 'lib/classNames';
import { MobileMenu } from 'components/common';
import { DiscordMenu, Logo, Notifications } from 'components/ui';
import { SiDiscord } from 'react-icons/si';
import { DiScriptcs } from 'react-icons/di';
import { BiCodeBlock } from 'react-icons/bi';

interface NavProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav = ({ open, setOpen }: NavProps) => {
  const {
    discordMenuOpen,
    setDiscordMenuOpen,
    notificationsOpen,
    setNotificationsOpen,
    discordRef,
    notificationsRef,
    currentIndex,
  } = useNav();

  return (
    <nav className='fixed top-0 left-0 right-0 z-30 bg-white shadow dark:bg-gray-900'>
      <div className='my-container'>
        <div className='relative flex justify-between h-16'>
          <div className='inset-y-0 left-0 flex items-center -ml-4 sm:hidden'>
            {/* Mobile menu button */}
            <button
              type='button'
              title='Open Main Menu'
              aria-controls='mobile-menu'
              aria-expanded='false'
              className='inline-flex items-center justify-center px-4 py-4 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600'
              onClick={() => setOpen(true)}
            >
              <svg
                className={classNames('w-6 h-6', open ? 'hidden' : 'block')}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
              <svg
                className={classNames('w-6 h-6', open ? 'block' : 'hidden')}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
          <div className='flex items-center justify-start flex-1 sm:items-stretch sm:justify-start'>
            <Link href='/'>
              <a
                title='Home Page'
                className='flex items-center flex-shrink-0 rounded'
              >
                <Logo className='w-8 h-8 mr-2 sm:mr-0 lg:mr-2' />
                <span className='text-2xl font-bold sm:hidden text-primary lg:block dark:text-primary-light'>
                  CSCE Club
                </span>
              </a>
            </Link>
            <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
              <Link href='#about'>
                <a
                  className={classNames(
                    'inline-flex items-center px-1 pt-1 text-base font-medium border-b-2',
                    currentIndex === 1
                      ? 'border-primary text-gray-900 dark:text-gray-50'
                      : 'border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:text-gray-100 hover:text-gray-800'
                  )}
                >
                  About
                </a>
              </Link>
              <Link href='#events'>
                <a
                  className={classNames(
                    'inline-flex items-center px-1 pt-1 text-base font-medium border-b-2',
                    currentIndex === 2
                      ? 'border-primary text-gray-900 dark:text-gray-50'
                      : 'border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:text-gray-100 hover:text-gray-800'
                  )}
                >
                  Events
                </a>
              </Link>
              <Link href='#workshops'>
                <a
                  className={classNames(
                    'inline-flex items-center px-1 pt-1 text-base font-medium border-b-2',
                    currentIndex === 3
                      ? 'border-primary text-gray-900 dark:text-gray-50'
                      : 'border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:text-gray-100 hover:text-gray-800'
                  )}
                >
                  Workshops
                </a>
              </Link>
              <Link href='#officers'>
                <a
                  className={classNames(
                    'inline-flex items-center px-1 pt-1 text-base font-medium border-b-2',
                    currentIndex === 4
                      ? 'border-primary text-gray-900 dark:text-gray-50'
                      : 'border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:text-gray-100 hover:text-gray-800'
                  )}
                >
                  Officers
                </a>
              </Link>
              <Link href='#contact'>
                <a
                  className={classNames(
                    'inline-flex items-center px-1 pt-1 text-base font-medium border-b-2',
                    currentIndex === 5
                      ? 'border-primary text-gray-900 dark:text-gray-50'
                      : 'border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:text-gray-100 hover:text-gray-800'
                  )}
                >
                  Contact
                </a>
              </Link>
            </div>
          </div>
          <div className='absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
            <div ref={notificationsRef} className='relative flex items-center'>
              <button
                title='Open Notifications'
                aria-expanded={notificationsOpen}
                aria-haspopup='true'
                className='text-gray-400 rounded-full hover:text-gray-500 focus:text-gray-500 dark:text-gray-300 dark:hover:text-gray-100 dark:focus:text-gray-100'
                onClick={() => setNotificationsOpen(!notificationsOpen)}
              >
                <svg
                  className='w-6 h-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                  />
                </svg>
              </button>
              <Notifications
                open={notificationsOpen}
                setOpen={setNotificationsOpen}
                position='right-4 top-8 origin-top-right'
              />
            </div>
            <div ref={discordRef} className='relative ml-3'>
              <button
                type='button'
                title='Open Discord Menu'
                id='user-menu'
                aria-expanded={discordMenuOpen}
                aria-haspopup='true'
                className='flex text-sm rounded-full text-primary hover:text-blurple focus:text-blurple dark:text-primary-light'
                onClick={() => setDiscordMenuOpen(!discordMenuOpen)}
              >
                <SiDiscord
                  title='Open Discord Menu'
                  className='w-6 h-6 fill-current'
                />
              </button>
              <DiscordMenu
                open={discordMenuOpen}
                setOpen={setDiscordMenuOpen}
                position='right-4 origin-top-right'
              />
            </div>
          </div>
          <MobileMenu
            show={open}
            toggle={setOpen}
            currentIndex={currentIndex}
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
