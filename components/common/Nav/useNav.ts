import React, { useRef, useState } from 'react';
import useClickAway from 'lib/hooks/useClickAway';

type NavHook = () => {
  discordMenuOpen: boolean;
  setDiscordMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  notificationsOpen: boolean;
  setNotificationsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  discordRef: React.RefObject<HTMLDivElement>;
  notificationsRef: React.RefObject<HTMLDivElement>;
};

const useNav: NavHook = () => {
  const [discordMenuOpen, setDiscordMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const discordRef = useRef<HTMLDivElement>(null);
  const notificationsRef = useRef<HTMLDivElement>(null);

  useClickAway(discordRef, setDiscordMenuOpen);
  useClickAway(notificationsRef, setNotificationsOpen);

  return {
    discordMenuOpen,
    setDiscordMenuOpen,
    notificationsOpen,
    setNotificationsOpen,
    discordRef,
    notificationsRef,
  };
};

export default useNav;
