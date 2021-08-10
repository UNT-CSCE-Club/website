import useMediaQuery from 'lib/hooks/useMediaQuery';

const isDesktop = (): boolean => {
  const result = useMediaQuery('(min-width: 1024px)');

  return result;
};

export default isDesktop;
