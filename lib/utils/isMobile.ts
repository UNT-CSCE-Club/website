import useMediaQuery from 'lib/hooks/useMediaQuery';

const isMobile = (): boolean => {
  const result = useMediaQuery('(max-width: 1024px)');

  return result;
};

export default isMobile;
