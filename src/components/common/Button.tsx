import React from 'react';

interface Props {
  url?: string;
  text?: string;
  icon?: string;
  size?: 'small' | 'medium';
  outline?: boolean;
}

function Button({ url, text, icon, size, outline }: Props) {
  let outlineStyle = 'text-navy bg-white hover:bg-opacity-90';
  if (outline) {
    outlineStyle = 'text-white bg-transparent hover:bg-white hover:bg-opacity-10';
  }

  let sizeStyle = 'px-6 py-4 font-bold text-xl';
  if (size === 'small') {
    sizeStyle = 'px-4 py-2.5 font-bold text-sm';
  }

  const styled = `flex gap-3.5 items-center justify-center border-white border hover:no-underline rounded-lg cursor-pointer ${sizeStyle} ${outlineStyle} ring-0 focus:ring-4 ring-white ring-opacity-30 duration-75`;

  const renderChild = (
    <>
      <span className="-mb-0.5">{text}</span>
      {icon && <img className="w-5.5" src={icon} alt="" />}
    </>
  );

  return url ? (
    <a href={url} className={`${styled}`}>
      {renderChild}
    </a>
  ) : (
    <div className="flex flex-col gap-5">
      <button type="button" className={`${styled}`}>
        {renderChild}
      </button>
    </div>
  );
}

export default Button;
