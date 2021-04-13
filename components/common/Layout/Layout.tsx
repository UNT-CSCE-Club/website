import React, { useState } from 'react';
import { Footer, MobileMenu, Nav } from 'components/common';

const Layout: React.FC = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Nav open={mobileMenuOpen} setOpen={setMobileMenuOpen} />
      {children}
      <Footer />
      {/* <MobileMenu show={mobileMenuOpen} toggle={setMobileMenuOpen} /> */}
    </>
  );
};

export default Layout;
