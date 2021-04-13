import React, { useRef, useState } from 'react';
import { classNames } from 'lib/classNames';
import MobileMenu from '../MobileMenu';
import { SiDiscord } from 'react-icons/si';
import { Transition } from '@headlessui/react';
import useClickAway from 'lib/hooks/useClickAway';
import Link from 'next/link';

interface NavProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav = ({ open, setOpen }: NavProps) => {
  const [discordMenuOpen, setDiscordMenuOpen] = useState(false);
  const discordRef = useRef(null);
  useClickAway(discordRef, setDiscordMenuOpen);

  return (
    <nav
      ref={discordRef}
      className='fixed top-0 left-0 right-0 bg-white shadow'
    >
      <div className='px-2 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='relative flex justify-between h-16'>
          <div className='inset-y-0 left-0 flex items-center sm:hidden'>
            {/* Mobile menu button */}
            <button
              type='button'
              className='inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary-soft'
              aria-controls='mobile-menu'
              aria-expanded='false'
              onClick={() => setOpen(true)}
            >
              <span className='sr-only'>Open main menu</span>
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
              <a className='flex items-center flex-shrink-0 rounded focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary-soft'>
                <img
                  className='block w-auto h-8 ml-2 sm:ml-0'
                  src='/Eagle.svg'
                  alt='Image of UNT Screaming Eagle'
                />
                <span className='ml-2 text-2xl font-bold sm:hidden text-primary lg:block'>
                  CSCE Club
                </span>
              </a>
            </Link>
            <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
              {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
              <a
                href='#'
                className='inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary-soft'
              >
                About
              </a>
              <a
                href='#'
                className='inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary-soft'
              >
                Events
              </a>
              <a
                href='#'
                className='inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary-soft'
              >
                Opportunities
              </a>
              <a
                href='#'
                className='inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary-soft'
              >
                Officers
              </a>
              <a
                href='#'
                className='inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary-soft'
              >
                Contact
              </a>
            </div>
          </div>
          <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
            <button className='p-1 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-soft'>
              <span className='sr-only'>View notifications</span>
              {/* Heroicon name: outline/bell */}
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
            <div className='relative ml-3'>
              <div>
                <button
                  type='button'
                  className={`${
                    discordMenuOpen ? '' : ''
                  }flex text-sm bg-white p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-soft`}
                  id='user-menu'
                  aria-expanded={discordMenuOpen}
                  aria-haspopup='true'
                  onClick={() => setDiscordMenuOpen(!discordMenuOpen)}
                >
                  <span className='sr-only'>Open Discord menu</span>
                  <SiDiscord className='w-6 h-6 text-gray-500' />
                </button>
              </div>
              <Transition
                show={discordMenuOpen}
                enter='transition ease-out duration-200'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
              >
                <div
                  className='absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                  role='menu'
                  aria-orientation='vertical'
                  aria-labelledby='user-menu'
                >
                  <a
                    href='#'
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary-soft'
                    role='menuitem'
                    onClick={() => setDiscordMenuOpen(false)}
                  >
                    Open Discord
                  </a>
                  <a
                    href='#'
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary-soft'
                    role='menuitem'
                    onClick={() => setDiscordMenuOpen(false)}
                  >
                    Join the Discord
                  </a>
                </div>
              </Transition>
            </div>
          </div>
          <MobileMenu show={open} toggle={setOpen} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
