import React from 'react';
import { Transition } from '@headlessui/react';

interface DiscordMenuProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  position: string;
}

const DiscordMenu = ({ open, setOpen, position }: DiscordMenuProps) => {
  return (
    <Transition
      show={open}
      enter='transition ease-out duration-200'
      enterFrom='transform opacity-0 scale-0'
      enterTo='transform opacity-100 scale-100'
      leave='transition ease-in duration-75'
      leaveFrom='transform opacity-100 scale-100'
      leaveTo='transform opacity-0 scale-0'
      className={`${position} absolute w-48 py-1 mt-2 bg-white rounded-md shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none`}
    >
      <div role='menu' aria-orientation='vertical' aria-labelledby='user-menu'>
        <a
          href='https://discord.com/channels/@me'
          target='_blank'
          rel='noopener'
          role='menuitem'
          className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
          onClick={() => setOpen(false)}
        >
          Open Discord
        </a>
        <a
          href={process.env.NEXT_PUBLIC_DISCORD_INVITE_URL}
          target='_blank'
          rel='noopener'
          role='menuitem'
          className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
          onClick={() => setOpen(false)}
        >
          Join the Discord
        </a>
      </div>
    </Transition>
  );
};

export default DiscordMenu;
