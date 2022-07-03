import React from 'react';
import Link from 'next/link';
import navlinks from '../../helper/navlinks.json';

interface Props {
  toggleMenu: () => void;
}

function MobileLinks({ toggleMenu }: Props) {
  return (
    <div className="mt-1.25 block md:hidden rounded-lg p-1.25 absolute left-0 right-0 bg-dark bg-opacity-80 backdrop-blur-md ">
      <ul className="list-none flex flex-col gap-1 relative z-10">
        {navlinks.filter(({ navbar }) => navbar).map(({ name, url }, index) => (
          <li key={index}>
            <Link href={url}>
              <a
                onClick={toggleMenu}
                className="text-white font-regular p-3.75 block hover:bg-white hover:bg-opacity-10 duration-150 hover:no-underline rounded"
              >
                {name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={toggleMenu}
        className="fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-0 "
      />
    </div>
  );
}

export default MobileLinks;
