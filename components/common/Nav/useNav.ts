import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import { Category } from '@chec/commerce.js/types/category';
import useClickAway from 'lib/hooks/useClickAway';
import commerce from 'lib/commerce';

type NavHook = () => {
  discordMenuOpen: boolean;
  setDiscordMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  discordRef: React.RefObject<HTMLDivElement>;
  currentIndex: number;
  isAboutIndex: boolean;
  merchCategories: Category[] | null;
};

const useNav: NavHook = () => {
  const router = useRouter();
  const [discordMenuOpen, setDiscordMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [merchCategories, setMerchCategories] = useState<Category[] | null>(
    null
  );

  const isAboutIndex =
    currentIndex === 1 ||
    currentIndex === 2 ||
    currentIndex === 3 ||
    currentIndex === 4;

  const discordRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    commerce.categories
      .list()
      .then(({ data: categories }) => setMerchCategories(categories))
      .catch(err => console.error(err));
  }, []);

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
      case '/#workshops':
        setCurrentIndex(3);
        break;
      case '/#officers':
        setCurrentIndex(4);
        break;
      case '/#contact':
        setCurrentIndex(5);
        break;
      case '/merch':
        setCurrentIndex(6);
        break;
      case '/merch/products':
        setCurrentIndex(7);
        break;
      case '/merch/categories':
        setCurrentIndex(8);
        break;
      case '/merch/categories/accessories':
        setCurrentIndex(9);
        break;
      case '/merch/categories/apparel':
        setCurrentIndex(10);
        break;
      default:
        break;
    }
  }, [router.asPath]);

  useClickAway(discordRef, setDiscordMenuOpen);

  return {
    discordMenuOpen,
    setDiscordMenuOpen,
    discordRef,
    currentIndex,
    isAboutIndex,
    merchCategories,
  };
};

export default useNav;
