import React from 'react';
import { Transition } from '@headlessui/react';

interface NotificationsProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  position: string;
}

const Notifications = ({ open, setOpen, position }: NotificationsProps) => {
  return (
    <Transition
      show={open}
      enter='transition ease-out duration-200'
      enterFrom='transform opacity-0 scale-0'
      enterTo='transform opacity-100 scale-100'
      leave='transition ease-in duration-75'
      leaveFrom='transform opacity-100 scale-100'
      leaveTo='transform opacity-0 scale-0'
      className={`${position} absolute w-60 py-1 mt-2 bg-white rounded-md shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none`}
    >
      <div role='dialog' aria-orientation='vertical' className='px-4 py-2'>
        <span className='block mb-2 font-bold'>Notifications</span>
        <ul>
          <li className='text-sm text-gray-600'>
            Meetings on Wednesdays at 6:30pm. Come join us!
          </li>
        </ul>
      </div>
    </Transition>
  );
};

export default Notifications;
