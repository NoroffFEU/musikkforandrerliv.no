import React from 'react';

/**
 * @description Option element for language dropdown
 */
const Option = React.forwardRef(({ children, className, ...props }, ref) => (
  <button
    role="option"
    ref={ref}
    className={`${className} flex w-full cursor-pointer items-center gap-2 px-2 py-1 text-sm transition-colors outline-none select-none hover:bg-gray-100 focus:bg-gray-100`}
    {...props}
  >
    {children}
  </button>
));

Option.displayName = 'Option';

export default Option;
