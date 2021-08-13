import Link from 'next/link';
import { useCartDispatch, useCartState } from 'context/cart';
import { CartItem } from '@/merch/cart';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import CartSummary from '../CartSummary';
import { ClubMembersSvg } from 'components/ui';
import { classNames } from 'lib/utils/classNames';

const Cart = () => {
  const { isOpen, line_items, subtotal } = useCartState();
  const { setIsOpen } = useCartDispatch();

  const isEmpty = line_items.length === 0;

  return (
    <Transition.Root show={isOpen} as={Fragment} appear={true}>
      <Dialog
        as='div'
        className='fixed inset-0 z-40 overflow-hidden'
        onClose={() => setIsOpen(!isOpen)}
      >
        <div className='absolute inset-0 overflow-hidden'>
          <Transition.Child
            as={Fragment}
            enter='ease-in-out duration-500'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in-out duration-500'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='absolute inset-0 transition-opacity bg-gray-500 bg-opacity-75' />
          </Transition.Child>

          <div className='fixed inset-y-0 right-0 flex max-w-full'>
            <Transition.Child
              as={Fragment}
              enter='transform transition ease-in-out duration-500 sm:duration-700'
              enterFrom='translate-x-full'
              enterTo='translate-x-0'
              leave='transform transition ease-in-out duration-500 sm:duration-700'
              leaveFrom='translate-x-0'
              leaveTo='translate-x-full'
            >
              <div className='w-screen max-w-md'>
                <div
                  className={classNames(
                    'flex flex-col h-full overflow-y-scroll bg-white shadow-xl',
                    isEmpty &&
                      'bg-no-repeat bg-cover abstract-bg bg-top-right bg-gray-100 dark:bg-gray-800'
                  )}
                >
                  <div className='flex-1 px-4 py-6 overflow-y-auto sm:px-6'>
                    <div className='flex items-start justify-between'>
                      <Dialog.Title className='text-lg font-bold text-gray-900 dark:text-gray-50'>
                        Shopping cart
                      </Dialog.Title>
                      <div className='flex items-center ml-3 h-7'>
                        <button
                          className='p-2 -m-2 text-gray-800 rounded dark:text-gray-200 dark:hover:text-gray-50 hover:text-gray-900'
                          onClick={() => setIsOpen(false)}
                        >
                          <span className='sr-only'>Close panel</span>
                          <XIcon className='w-6 h-6' aria-hidden='true' />
                        </button>
                      </div>
                    </div>

                    <div className='h-full mt-8'>
                      <div className='flow-root'>
                        {!isEmpty && (
                          <ul
                            role='list'
                            className='-my-6 divide-y divide-gray-200'
                          >
                            {line_items.map(item => (
                              <CartItem item={item} key={item.id} />
                            ))}
                          </ul>
                        )}
                      </div>
                      {isEmpty && (
                        <div className='flex flex-col justify-between h-full pb-16 sm:justify-around'>
                          <p className='text-4xl font-bold text-gray-900 dark:text-gray-50 xs:text-5xl'>
                            Looks like your cart is empty
                          </p>
                          <ClubMembersSvg className='w-full h-auto' />
                          <Link href='/merch'>
                            <a
                              onClick={() => setIsOpen(false)}
                              className='flex items-center justify-center px-6 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-lg bg-primary hover:bg-primary-light'
                            >
                              Check Out the Store
                            </a>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                  {!isEmpty && (
                    <CartSummary subtotal={subtotal} isEmpty={isEmpty} />
                  )}
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Cart;
