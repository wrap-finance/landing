import React from 'react';
import joinCards from '../../helper/join-cards.json';

function JoinAdvice() {
  return (
    <div className="bg-bottom relative z-20 mb-4 max-w-container mx-auto">
      <div className="relative z-10">
        <h2 className="text-center hidden md:block font-bold text-5xl text-white mb-32">
          The future of DeFi<br />is happening today
        </h2>
        <div className="grid grid-cols-3 pb-36">
          {joinCards.map(({ id, icon, title, describe }, i) => (
            <div key={id} className={`flex justify-center ${i % 2 !== 0 ? 'translate-y-1/2' : ''}`}>
              <div className="flex flex-col gap-5 text-center items-center w-full max-w-[290px]">
                <img className="w-20 md:w-[120px]" src={icon} alt="" />
                <strong className="text-skyblue font-bold text-2xl">{title}</strong>
                <p className="text-white hidden md:block font-extraLight text-xl">{describe}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img
        className="w-[90%] mx-auto left-0 right-0 z-0 absolute bottom-20 md:bottom-12"
        src="/images/Group 14.png"
        alt=""
      />
    </div>
  );
}

export default JoinAdvice;
