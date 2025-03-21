import React, { KeyboardEvent, MouseEvent, ForwardedRef } from 'react';
import { DisplayLanguage } from '../../types';

/**
 * @description Option element for language dropdown
 */
interface OptionProps {
  value: DisplayLanguage;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  className?: string;
}

const Option = React.forwardRef(
  ({ children, className, ...props }: OptionProps, ref: ForwardedRef<HTMLButtonElement>) => (
    <button
      role="option"
      ref={ref}
      className={`${className || ''} flex w-full cursor-pointer items-center gap-2 px-2 py-1 text-sm transition-colors outline-none select-none hover:bg-gray-100 focus:bg-gray-100`}
      {...props}
    >
      {children}
    </button>
  )
);

Option.displayName = 'Option';

export default Option;