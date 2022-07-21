import Link from 'next/link';
import React from 'react';
import navlinks from '../../helper/navlinks.json';

function Footer() {
  return (
    <footer>
      <div className="md:bg-black px-7.5 md:p-12.5 md:mt-0 pt-24 md:pt-48">
        <div className="flex md:flex-row flex-col md:gap-0 gap-12.5 justify-between mx-auto max-w-screen-2xl">
          <div className="flex flex-col gap-12.5 flex-grow">
            <Link href="/">
              <a className="">
                <img className="w-20 mx-auto md:mx-0" src="/images/wrap.svg" alt="" />
              </a>
            </Link>
            <p className="font-regular text-center md:text-left text-opacity-50 text-sm text-white">
              Wrap.Finance ©copyright 2022{' '}
            </p>
          </div>
          <div className="flex justify-between gap-20 md:pb-0 pb-6">
            <div className="flex flex-col gap-4">
              <a href={navlinks[1].url} target="_blank" rel="noreferrer noopener">Documentation</a>
              <a href={navlinks[2].url} target="_blank" rel="noreferrer noopener">Blog</a>
              {/*<a href={navlinks[3].url} target="_blank" rel="noreferrer noopener">Links</a>*/}
            </div>
            <div className="flex flex-col gap-4">
              <a href={navlinks[0].url} target="_blank" rel="noreferrer noopener">Discord</a>
              <a href={navlinks[4].url} target="_blank" rel="noreferrer noopener">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
