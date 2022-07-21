import React from 'react';

interface Props {
  disabled?: boolean;
  url?: string;
  text?: string;
  icon?: string;
  size?: 'small' | 'medium';
  outline?: boolean;
}

function Button({ url, text, icon, size, outline, disabled }: Props) {
  let outlineStyle = outline ? 'text-white bg-transparent' : 'text-navy bg-white';
  if (!disabled) {
    outlineStyle += ' hover:shadow-button active:shadow-buttonActive';
    outlineStyle += outline
      ? ' hover:bg-white hover:bg-opacity-10'
      : ' hover:bg-darkblue hover:bg-opacity-90 hover:shadow-button hover:text-lightblue';
  }

  let sizeStyle = 'px-6 py-4 font-bold text-xl';
  if (size === 'small') {
    sizeStyle = 'px-4 py-2.5 font-bold text-sm';
  }

  let styled =
    `flex gap-3.5 items-center justify-center border-white border hover:no-underline rounded-lg ${sizeStyle} ${outlineStyle} ring-0 focus:ring-4 ring-white ring-opacity-30`;
  styled += disabled ? ' cursor-auto' : ' cursor-pointer';

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
      <button disabled={disabled} type="button" className={`${styled}`}>
        {renderChild}
      </button>
    </div>
  );
}

export default Button;
