import React, { useState, memo, KeyboardEvent } from 'react';
import { createPortal } from 'react-dom';

import useLanguageSwitcher from '../../hooks/useLanguageSwitcher';
import { BaseProps, DisplayLanguage } from '../../types';
import * as Icon from './LanguageIcons';
import Option from './LanguageOption';

/**
 * Translates the language code to a human-readable name.
 */
function translateLangCode(value: DisplayLanguage): string {
  const languageNames: Record<DisplayLanguage, string> = {
    'En': 'English',
    'No': 'Norsk',
    'Mg': 'Malagasy'
  };
  return languageNames[value] || 'Unknown';
}

/**
 * i18n codes
 * nb = norwegian
 * en = english
 * (?) = Malagasy
 */

// We're just using BaseProps directly since we don't need to add any properties
type SelectLanguageButtonProps = BaseProps;

const SelectLanguageButton: React.FC<SelectLanguageButtonProps> = ({ className }) => {
  const { language, handleLanguageChange } = useLanguageSwitcher();
  const [open, setOpen] = useState<boolean>(false);

  function handleKeyDown({ key }: KeyboardEvent): void {
    if (key === 'Escape') setOpen(false);
  }

  function handleOpen(): void {
    setOpen(!open);
  }

  function handleSelect(event: React.MouseEvent<HTMLButtonElement>): void {
    handleLanguageChange(event.currentTarget.value as DisplayLanguage);
    setOpen(false);
  }

  /**
   * @example if language === 'En' then FlagIcon === Icon.['En'] (UK flag) => FlagIcon can now be used as a JSXElement <FlagIcon/>
   * ! STATE OF LANG HOOK AND ICON NAMES MUST BE EQUAL. (or translated)
   */
  const FlagIcon =
    Icon[language.charAt(0).toUpperCase() + language.slice(1) as keyof typeof Icon] ?? Icon.Globe;

  return (
    <>
      <div
        onKeyDown={handleKeyDown}
        className={`${className} relative z-50 h-fit w-full sm:w-fit [&_*]:border-gray-300`}
        role="menu"
      >
        <button
          onClick={handleOpen}
          className="flex w-full cursor-pointer items-center justify-between rounded-md p-1 px-2 text-left outline-offset-2 transition-colors select-none hover:text-black/70 max-md:space-x-2 max-sm:border sm:w-fit sm:p-0"
          aria-controls="popover"
        >
          <div className="max-md:space-x-2">
            <FlagIcon className="inline-block" />
            <span className="sm:hidden">{translateLangCode(language)}</span>
          </div>
          <Icon.ChevronDown
            className={`${
              open ? '' : '-rotate-180'
            } transition-transform sm:hidden`}
          />
        </button>
        <div
          data-state-open={open}
          className="absolute top-11 right-0 w-full min-w-28 rounded-md border bg-white shadow-lg transition-opacity data-[state-open=false]:hidden sm:w-fit overflow-hidden"
          id="popover"
          role="listbox"
        >
          <Option value="En" onClick={handleSelect} onKeyDown={handleKeyDown}>
            <Icon.En />
            <span>English</span>
          </Option>
          <Option value="No" onClick={handleSelect} onKeyDown={handleKeyDown}>
            <Icon.No />
            <span>Norsk</span>
          </Option>
          <Option value="Mg" onClick={handleSelect} onKeyDown={handleKeyDown}>
            <Icon.Mg />
            <span>Melayu</span>
          </Option>
        </div>
      </div>
      {/* Invisible backdrop - This makes sure the dropdown closes if user clicks/focuses outside - Add a background color for troubleshooting */}
      {open
        ? createPortal(
            <div
              tabIndex={0}
              className="absolute inset-0 z-10"
              onFocus={() => setOpen(false)}
              onClick={() => setOpen(false)}
            ></div>,
            document.body,
          )
        : null}
    </>
  );
};

export default memo(SelectLanguageButton);