import React from 'react';
import Button from '../../components/common/Button';
import navlinks from '../../helper/navlinks.json';

function Hero() {
  return (
    <main className="md:mt-0 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-container mx-auto md:min-h-[760px] items-center">
        <div>
          <div>
            <h4 className="text-white font-bold text-6xl md:ext-6xl md:mb-12.5 md:text-left text-center">
              A universal liquid<br />layer for veTokens
            </h4>
            <div className="hidden md:flex md:flex-row flex-col gap-7.5">
              {/* <Button url="#" text="USE THE APP" /> */}
              <Button url="#" text="COMING SOON" disabled />
              <Button url={navlinks[1].url} outline text="View Documentation" />
            </div>
          </div>
        </div>
        <div>
          <img
            className="p-5 w-full max-w-[670px]"
            src="/images/wrapped-earth-illustration-circle-transparent.png"
            alt=""
          />
        </div>
        <div className="flex md:hidden md:flex-row flex-col mt-10 gap-7.5">
          {/* <Button url="#" text="USE THE APP" /> */}
          <Button url="#" text="COMING SOON" disabled />
          <Button url={navlinks[1].url} outline text="View Documentation" />
        </div>
      </div>
    </main>
  );
}

export default Hero;
