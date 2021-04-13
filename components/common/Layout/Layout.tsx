import React, { useState } from 'react';
import { Footer, MobileMenu, Nav } from 'components/common';

const Layout: React.FC = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Nav open={mobileMenuOpen} setOpen={setMobileMenuOpen} />
      <main className='min-h-screen pt-16'>{children}</main>
      <Footer />
      {/* <MobileMenu show={mobileMenuOpen} toggle={setMobileMenuOpen} /> */}
    </>
  );
};

export default Layout;
