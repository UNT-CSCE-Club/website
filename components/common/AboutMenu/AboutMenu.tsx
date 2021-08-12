import { Fragment } from 'react';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import { classNames } from 'lib/utils/classNames';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/solid';
import { SiDiscord } from 'react-icons/si';
import {
  FiCalendar,
  FiChevronsRight,
  FiInfo,
  FiMessageSquare,
  FiUsers,
} from 'react-icons/fi';

const aboutLinks = [
  {
    name: 'Community',
    description:
      'Have discussions with your peers and learn about all thing computer science.',
    href: '/#about',
    icon: FiInfo,
  },
  {
    name: 'Events',
    description:
      'Compete in events like hackathons and cyber security CTF tournaments.',
    href: '/#events',
    icon: FiCalendar,
  },
  {
    name: 'Workshops',
    description:
      'Get hands on experience in computer science with workshops led by club members.',
    href: '/#workshops',
    icon: FiChevronsRight,
  },
  {
    name: 'Officers',
    description:
      'Meet our leadership, a group of UNT students with a passion for computer science.',
    href: '/#officers',
    icon: FiUsers,
  },
];
const callsToAction = [
  {
    name: 'Join Club',
    href: process.env.NEXT_PUBLIC_DISCORD_INVITE_URL,
    icon: SiDiscord,
    isExternal: true,
  },
  {
    name: 'Ask A Question',
    href: '/#contact',
    icon: FiMessageSquare,
    isExternal: false,
  },
];

interface Props {
  currentIndex: number;
  isAboutIndex: boolean;
}

const AboutMenu = ({ currentIndex, isAboutIndex }: Props) => {
  return (
    <Popover.Group className='flex'>
      <Popover as={Fragment}>
        {({ open, close }) => (
          <>
            <Popover.Button
              className={classNames(
                'group inline-flex items-center px-1 pt-1 text-base font-medium border-b-2',
                open
                  ? 'text-gray-900 dark:text-gray-50'
                  : 'text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100',
                isAboutIndex ? 'border-primary' : 'border-transparent'
              )}
            >
              <span>About</span>
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
              enterFrom='opacity-0 translate-y-2'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-2'
            >
              <Popover.Panel
                static
                className='absolute inset-x-0 z-10 hidden transform bg-white shadow-lg sm:block top-full'
              >
                <div className='grid py-6 mx-auto my-container gap-y-6 sm:grid-cols-2 sm:gap-8 sm:py-8 lg:grid-cols-4 lg:py-12 xl:py-16'>
                  {aboutLinks.map((item, index) => (
                    <Link key={item.name} href={item.href}>
                      <a
                        onClick={() => close()}
                        className={classNames(
                          'flex flex-col justify-between p-3 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50',
                          currentIndex === index + 1 && 'bg-gray-50'
                        )}
                      >
                        <div className='flex md:h-full lg:flex-col'>
                          <div className='flex-shrink-0'>
                            <div className='inline-flex items-center justify-center w-10 h-10 text-white rounded-md bg-primary sm:h-12 sm:w-12'>
                              <item.icon
                                className='w-6 h-6'
                                aria-hidden='true'
                              />
                            </div>
                          </div>
                          <div className='ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4'>
                            <div>
                              <p className='text-base font-medium text-gray-900'>
                                {item.name}
                              </p>
                              <p className='mt-1 text-sm text-gray-500'>
                                {item.description}
                              </p>
                            </div>
                            <p className='mt-2 text-sm font-medium text-primary dark:text-primary-light lg:mt-4'>
                              Learn more <span aria-hidden='true'>&rarr;</span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </Link>
                  ))}
                </div>
                <div className='bg-gray-50'>
                  <div className='py-5 mx-auto space-y-6 my-container sm:flex sm:space-y-0 sm:space-x-10'>
                    {callsToAction.map(item => (
                      <div key={item.name} className='flow-root'>
                        {item.isExternal ? (
                          <a
                            href={item.href}
                            target='_blank'
                            rel='noopener'
                            className='flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition duration-150 ease-in-out rounded-md hover:bg-gray-100'
                          >
                            <item.icon
                              className='flex-shrink-0 w-6 h-6 text-gray-400'
                              aria-hidden='true'
                            />
                            <span className='ml-3'>{item.name}</span>
                          </a>
                        ) : (
                          <Link href={item.href}>
                            <a
                              onClick={() => close()}
                              className='flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition duration-150 ease-in-out rounded-md hover:bg-gray-100'
                            >
                              <item.icon
                                className='flex-shrink-0 w-6 h-6 text-gray-400'
                                aria-hidden='true'
                              />
                              <span className='ml-3'>{item.name}</span>
                            </a>
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </Popover.Group>
  );
};

export default AboutMenu;
