import React from 'react';
import Link from 'next/link';
import { Transition } from '@headlessui/react';

interface MobileMenuProps {
  show: boolean;
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu = ({ show, toggle }: MobileMenuProps) => {
  return (
    <Transition
      show={show}
      enter='duration-200 ease-out'
      enterFrom='opacity-0 scale-95'
      enterTo='opacity-100 scale-100'
      leave='duration-100 ease-in'
      leaveFrom='opacity-100 scale-100'
      leaveTo='opacity-0 scale-95'
    >
      <div className='absolute inset-x-0 top-0 p-2 transition origin-top transform md:hidden'>
        <div className='bg-white divide-y-2 rounded-lg shadow-2xl ring-1 ring-black ring-opacity-5 divide-gray-50'>
          <div className='px-5 pt-5 pb-6'>
            <div className='flex items-center justify-between'>
              <Link href='/'>
                <a
                  onClick={() => toggle(false)}
                  className='flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50'
                >
                  <img
                    className='w-auto h-9'
                    src='/Eagle.svg'
                    alt='Image of UNT Screaming Eagle'
                  />
                  <div className='ml-4 text-xl font-bold text-gray-900'>
                    UNT CSCE Club
                  </div>
                </a>
              </Link>
              <div className='-mr-2'>
                <button
                  type='button'
                  className='inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100'
                  onClick={() => toggle(false)}
                >
                  <span className='sr-only'>Close menu</span>
                  {/* Heroicon name: outline/x */}
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
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className='mt-6'>
              <nav className='grid grid-cols-1 gap-7'>
                <a
                  onClick={() => toggle(false)}
                  href='#about'
                  className='flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50'
                >
                  <div className='flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-md bg-primary'>
                    {/* Heroicon name: outline/chart-bar */}
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
                        d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                      />
                    </svg>
                  </div>
                  <div className='ml-4 text-base font-medium text-gray-900'>
                    About the Club
                  </div>
                </a>
                <a
                  onClick={() => toggle(false)}
                  href='#events'
                  className='flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50'
                >
                  <div className='flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-md bg-primary'>
                    {/* Heroicon name: outline/cursor-click */}
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
                        d='M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122'
                      />
                    </svg>
                  </div>
                  <div className='ml-4 text-base font-medium text-gray-900'>
                    Events
                  </div>
                </a>
                <a
                  onClick={() => toggle(false)}
                  href='#opportunities'
                  className='flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50'
                >
                  <div className='flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-md bg-primary'>
                    {/* Heroicon name: outline/shield-check */}
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
                        d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                      />
                    </svg>
                  </div>
                  <div className='ml-4 text-base font-medium text-gray-900'>
                    Opportunities
                  </div>
                </a>
                <a
                  onClick={() => toggle(false)}
                  href='#officers'
                  className='flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50'
                >
                  <div className='flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-md bg-primary'>
                    {/* Heroicon name: outline/view-grid */}
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
                        d='M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'
                      />
                    </svg>
                  </div>
                  <div className='ml-4 text-base font-medium text-gray-900'>
                    Meet the Officers
                  </div>
                </a>
                <a
                  onClick={() => toggle(false)}
                  href='#contact'
                  className='flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50'
                >
                  <div className='flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-md bg-primary'>
                    {/* Heroicon name: outline/view-grid */}
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
                        d='M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'
                      />
                    </svg>
                  </div>
                  <div className='ml-4 text-base font-medium text-gray-900'>
                    Contact Us
                  </div>
                </a>
              </nav>
            </div>
          </div>
          <div className='px-5 py-6'>
            <a
              onClick={() => toggle(false)}
              href='#'
              className='flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-primary hover:bg-primary-dark'
            >
              Join the Discord
            </a>
            <span className='flex justify-center mt-6 space-x-8 text-base font-medium text-center text-gray-500'>
              <a
                onClick={() => toggle(false)}
                href='#'
                className='text-gray-400 rounded hover:text-gray-500'
              >
                <span className='sr-only'>Twitter</span>
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
                onClick={() => toggle(false)}
                href='#'
                className='text-gray-400 rounded hover:text-gray-500'
              >
                <span className='sr-only'>Instagram</span>
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
                onClick={() => toggle(false)}
                href='#'
                className='text-gray-400 rounded hover:text-gray-500'
              >
                <span className='sr-only'>GitHub</span>
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
            </span>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default MobileMenu;
