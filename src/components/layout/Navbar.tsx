import React from 'react';
import Link from 'next/link';
import Button from '../common/Button';
import navlinks from '../../helper/navlinks.json';
import Logo from '../common/Logo';

interface Props {
  toggleMenu: () => void;
}

function Navbar({ toggleMenu }: Props) {
  return (
    <nav className="py-5 px-7.5 flex justify-between items-center max-w-container mx-auto">
      <Logo />
      <ul className="list-none hidden md:flex gap-10.5">
        {navlinks.filter(({ navbar }) => navbar).map(({ name, url }, index) => (
          <li key={index}>
            <Link href={url}>
              <a className="text-white font-extraLight text-lg">{name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <div className="font-thin">
        <Button size="small" outline text="USE APP" url="#" icon="/images/Vector.svg" />
      </div>
      <div className="block md:hidden">
        <button
          onClick={toggleMenu}
          type="button"
          className="hover:bg-white rounded hover:bg-opacity-10 duration-150"
        >
          <img className="w-10 h-10" src="/images/menu.svg" alt="" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
