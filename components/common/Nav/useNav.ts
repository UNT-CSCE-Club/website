import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import useClickAway from 'lib/hooks/useClickAway';

type NavHook = () => {
  discordMenuOpen: boolean;
  setDiscordMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  notificationsOpen: boolean;
  setNotificationsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  discordRef: React.RefObject<HTMLDivElement>;
  notificationsRef: React.RefObject<HTMLDivElement>;
  currentIndex: number;
};

const useNav: NavHook = () => {
  const router = useRouter();
  const [discordMenuOpen, setDiscordMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const discordRef = useRef<HTMLDivElement>(null);
  const notificationsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    switch (router.asPath) {
      case '/':
        setCurrentIndex(0);
        break;
      case '/#about':
        setCurrentIndex(1);
        break;
      case '/#events':
        setCurrentIndex(2);
        break;
      case '/#opportunities':
        setCurrentIndex(3);
        break;
      case '/#officers':
        setCurrentIndex(4);
        break;
      case '/#contact':
        setCurrentIndex(5);
        break;
      default:
        break;
    }
  }, [router.asPath]);

  useClickAway(discordRef, setDiscordMenuOpen);
  useClickAway(notificationsRef, setNotificationsOpen);

  return {
    discordMenuOpen,
    setDiscordMenuOpen,
    notificationsOpen,
    setNotificationsOpen,
    discordRef,
    notificationsRef,
    currentIndex,
  };
};

export default useNav;
