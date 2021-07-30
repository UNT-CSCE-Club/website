import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FiMoon, FiSun } from 'react-icons/fi';

interface Props {
  className?: string;
}

const ThemeChanger = ({ className }: Props) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      {resolvedTheme === 'light' ? (
        <button
          title='Toggle light/dark theme'
          type='button'
          className={className}
          onClick={() => setTheme('dark')}
        >
          <FiMoon className='w-6 h-6' />
        </button>
      ) : (
        <button
          title='Toggle light/dark theme'
          type='button'
          className={className}
          onClick={() => setTheme('light')}
        >
          <FiSun className='w-6 h-6' />
        </button>
      )}
    </>
  );
};

export default ThemeChanger;
