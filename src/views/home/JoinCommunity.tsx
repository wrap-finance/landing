import React from 'react';
import navlinks from '../../helper/navlinks.json';

function JoinCommunity() {
  return (
    <div className="max-w-[738px] mx-auto p-12.5 rounded-2xl backdrop-blur-5xl borderEffect bg-join-community shadow-timeline">
      <div className="flex flex-col items-center">
        <h3 className="font-bold text-2xl md:text-4xl text-white text-center mb-4">
          Join our community today.
        </h3>
        <p className="font-light text-xl text-white text-center max-w-[400px]">
          We listen to you and integrate with your favorite voting-escrow projects.
        </p>
        <div className="flex gap-10 mt-12.5">
          <a href={navlinks[0].url} target="_blank" rel="noreferrer noopener">
            <img className="h-6 md:h-9" src="/images/Frame 29.svg" alt="" />
          </a>
          <a href={navlinks[4].url} target="_blank" rel="noreferrer noopener">
            <img className="h-6 md:h-9" src="/images/Frame 28.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default JoinCommunity;
