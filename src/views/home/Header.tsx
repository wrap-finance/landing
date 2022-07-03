import React, { useState } from 'react';
import Navbar from '../../components/layout/Navbar';
import MobileLinks from '../../components/layout/MobileLinks';

function Header() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => setMenu((v) => !v);

  return (
    <header className="relative">
      <div className="bg-black backdrop:blur-xl bg-opacity-30 rounded-2xl">
        <Navbar toggleMenu={toggleMenu} />
      </div>

      {menu && <MobileLinks toggleMenu={toggleMenu} />}
    </header>
  );
}

export default Header;
