import Link from 'next/link';
import { Popover } from '@headlessui/react';
import useNav from './useNav';
import { classNames } from 'lib/utils/classNames';
import { MobileMenu, AboutMenu } from 'components/common';
import {
  DiscordMenu,
  Logo,
  ShoppingCartButton,
  ThemeChanger,
} from 'components/ui';

import { SiDiscord } from 'react-icons/si';

interface NavProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav = ({ open, setOpen }: NavProps) => {
  const {
    discordMenuOpen,
    setDiscordMenuOpen,
    discordRef,
    currentIndex,
    isAboutIndex,
  } = useNav();

  return (
    <Popover
      as='nav'
      className='fixed top-0 left-0 right-0 z-30 bg-white dark:bg-gray-900'
    >
      <div
        className='absolute inset-0 z-30 shadow pointer-events-none'
        aria-hidden='true'
      />
      {/* <div className='my-container'> */}
      <div className='flex justify-between h-16 my-container'>
        <div className='flex items-center -ml-4 sm:hidden'>
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
              <span className='hidden text-2xl font-bold xs:block sm:hidden text-primary lg:block dark:text-primary-light'>
                CSCE Club
              </span>
            </a>
          </Link>
          <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
            <AboutMenu
              currentIndex={currentIndex}
              isAboutIndex={isAboutIndex}
            />
            <Link href='/#contact'>
              <a
                className={classNames(
                  'inline-flex items-center px-1 pt-1 text-base font-medium border-b-2 text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100',
                  currentIndex === 5 ? 'border-primary' : 'border-transparent'
                )}
              >
                Contact
              </a>
            </Link>
          </div>
        </div>
        <div className='flex items-center sm:ml-6 sm:pr-0'>
          <ThemeChanger className='text-gray-400 rounded-full hover:text-gray-500 focus:text-gray-500 dark:text-gray-300 dark:hover:text-gray-100 dark:focus:text-gray-100' />
          <ShoppingCartButton className='ml-4 text-gray-400 rounded-full hover:text-gray-500 focus:text-gray-500 dark:text-gray-300 dark:hover:text-gray-100 dark:focus:text-gray-100' />
          <div ref={discordRef} className='relative ml-5'>
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
              position='right-0 origin-top-right'
            />
          </div>
        </div>
        <MobileMenu show={open} toggle={setOpen} currentIndex={currentIndex} />
      </div>
      {/* </div> */}
    </Popover>
  );
};

export default Nav;
