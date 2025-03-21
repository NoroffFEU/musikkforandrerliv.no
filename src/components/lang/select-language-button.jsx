import * as Icon from "./language-icons";
import { useState, memo } from "react";
import { createPortal } from "react-dom";
import Option from "./language-option";
import useLanguageSwitcher from "../../hooks/useLanguageSwitcher";

function translateLangCode(value) {
  switch (value) {
    case "En":
      return "English";
    case "No":
      return "Norsk";
    case "Mg":
      return "Melayu";
    default:
      return "Select a Language";
  }
}

/**
 * @param {string} variant - "iconOnly" | "withText"
 *  - iconOnly: рендерим только иконку флага + стрелочку (без текста)
 *  - withText: рендерим и иконку, и текст (например, "Select a Language" или название языка)
 */
const SelectLanguageButton = ({ className, variant = "withText" }) => {
  const { language, handleLanguageChange } = useLanguageSwitcher();
  const [open, setOpen] = useState(false);

  const FlagIcon =
    Icon[language.charAt(0).toUpperCase() + language.slice(1)] ?? Icon.Globe;

  const displayedText = translateLangCode(language);

  function toggleOpen() {
    setOpen((prev) => !prev);
  }

  function handleKeyDown(e) {
    if (e.key === "Escape") setOpen(false);
  }

  function handleSelect(e) {
    handleLanguageChange(e.currentTarget.value);
    setOpen(false);
  }

  const showText = variant === "withText";

  const showChevron = true;

  return (
    <>
      <div
        onKeyDown={handleKeyDown}
        className={`${className} relative z-50`}
        role="menu"
      >
        <button
          onClick={toggleOpen}
          className="flex items-center justify-between gap-2 rounded-md px-2 py-1 hover:text-black/70 focus:outline-none transition-colors"
          aria-controls="popover"
        >
          <div className="flex items-center gap-2">
            <FlagIcon />
            {showText && <span>{displayedText}</span>}
          </div>

          {showChevron && (
            <Icon.ChevronDown
              className={`transition-transform ${open ? "" : "-rotate-180"}`}
            />
          )}
        </button>

        <div
          data-state-open={open}
          className={`absolute top-11 right-0 
                      min-w-[8rem] w-full 
                      rounded-md border bg-white shadow-lg 
                      transition-opacity data-[state-open=false]:hidden 
                      overflow-hidden
                      `}
          id="popover"
          role="listbox"
        >
          <Option value="En" onClick={handleSelect}>
            <Icon.En />
            <span>English</span>
          </Option>
          <Option value="No" onClick={handleSelect}>
            <Icon.No />
            <span>Norsk</span>
          </Option>
          <Option value="Mg" onClick={handleSelect}>
            <Icon.Mg />
            <span>Melayu</span>
          </Option>
        </div>
      </div>

      {open &&
        createPortal(
          <div
            tabIndex={0}
            className="fixed inset-0 z-10"
            onFocus={() => setOpen(false)}
            onClick={() => setOpen(false)}
          />,
          document.body
        )}
    </>
  );
};

export default memo(SelectLanguageButton);
