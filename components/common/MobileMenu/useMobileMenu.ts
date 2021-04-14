import useClickAway from 'lib/hooks/useClickAway';
import React, { useRef } from 'react';

type MobileMenuHook = (Params: {
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
}) => { menuRef: React.RefObject<HTMLDivElement> };

const useMobileMenu: MobileMenuHook = ({ toggle }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  useClickAway(menuRef, toggle);

  return { menuRef };
};

export default useMobileMenu;
