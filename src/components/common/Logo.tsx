import Link from 'next/link';
import React from 'react';

function Logo() {
  return (
    <Link href="/">
      <a>
        <img className="h-10 md:block hidden" src="/images/wrap-nav-logo.svg" alt="" />
        <img className="h-10 md:hidden block" src="/images/Group.svg" alt="" />
      </a>
    </Link>
  );
}

export default Logo;
