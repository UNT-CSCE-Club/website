import React, { useState } from 'react';
import { Footer, Nav } from 'components/common';

const Layout: React.FC = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Nav open={mobileMenuOpen} setOpen={setMobileMenuOpen} />
      <main className='min-h-screen pt-16 dark:bg-gray-800'>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
