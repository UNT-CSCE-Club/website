import React, { useRef, useState } from 'react';
import useClickAway from 'lib/hooks/useClickAway';

type FooterHook = () => {
  discordMenuOpen: boolean;
  setDiscordMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  discordRef: React.RefObject<HTMLDivElement>;
};

const useFooter: FooterHook = () => {
  const [discordMenuOpen, setDiscordMenuOpen] = useState(false);
  const discordRef = useRef<HTMLDivElement>(null);
  useClickAway(discordRef, setDiscordMenuOpen);

  return { discordMenuOpen, setDiscordMenuOpen, discordRef };
};

export default useFooter;
