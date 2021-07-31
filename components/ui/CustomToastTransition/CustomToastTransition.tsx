import React, { Fragment } from 'react';
import { Transition } from '@headlessui/react';
import { Toast } from 'react-hot-toast/dist/core/types';

const CustomToastTransition: React.FC<{ t: Toast }> = ({ t, children }) => {
  return (
    <Transition
      as={Fragment}
      show={t.visible}
      appear={true}
      enter='transform ease-out duration-300 transition'
      enterFrom='translate-y-20 scale-0 opacity-0 lg:scale-100 lg:translate-y-0 lg:translate-x-20'
      enterTo='translate-y-0 scale-100 opacity-100 lg:translate-x-0'
      leave='transition ease-in duration-300'
      leaveFrom='translate-y-0 scale-100 opacity-100 lg:translate-x-0'
      leaveTo='translate-y-20 scale-0 opacity-0 lg:scale-100 lg:translate-y-0 lg:translate-x-20'
    >
      {children}
    </Transition>
  );
};

export default CustomToastTransition;
