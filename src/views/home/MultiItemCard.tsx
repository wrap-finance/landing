import React from 'react';
import timelineCards from '../../helper/timeline-cards.json';

function MultiItemCard() {
  return (
    <div className="relative -mt-56  p-5 md:p-10 mb-16">
      <div className="bg-timeline-linear max-w-container mx-auto p-12.5 rounded-2xl backdrop-blur-5xl borderEffect shadow-timeline relative z-30">
        <div className="flex md:flex-row flex-col gap-10.5 items-center md:items-start">
          <div className="flex-grow md:max-w-[350px] md:text-left text-center">
            <h5 className="font-medium text-5xl text-white mb-7.5">
              Stake <span className="font-extraLight">veTokens to</span> earn more.
            </h5>
            <p className="font-extraLight text-white text-xl">
              Wrap is the leading liquid layer for veTokens in the StarkNet ecosystem. Earn more while keeping a liquid
              portfolio.
            </p>
          </div>
          <div className="flex md:flex-row flex-col gap-10 mt-10 md:mt-0 md:gap-0">
            {timelineCards.map(({ id, icon, title, describe }) => (
              <div
                key={id}
                className="px-7.5 flex items-center md:items-start text-center md:text-left flex-col gap-7.5 m-cards-1"
              >
                <img className="w-20" src={icon} alt="" />
                <h6 className="font-bold text-2xl text-white">{title}</h6>
                <p className="text-white text-xl font-extraLight">{describe}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute left-40 md:left-0 right-0 mx-auto max-w-container top-80 md:top-0">
        <img
          className="absolute top-0 -z-[1px] w-[300%] max-w-none -right-20 md:w-full ml-10 md:ml-64 md:mt-52"
          src="/images/image 18 (1).svg"
          alt=""
        />
      </div>
    </div>
  );
}

export default MultiItemCard;
