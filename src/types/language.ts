export type SupportedLanguage = 'en' | 'no' | 'mg';
export type DisplayLanguage = 'En' | 'No' | 'Mg';

export interface LanguageSwitcherProps {
  language: DisplayLanguage;
  handleLanguageChange: (language: DisplayLanguage) => void;
}

export interface LanguageOption {
  id: string;
  value: DisplayLanguage;
  label: string;
  icon: React.ReactNode;
}