import { ReactNode } from 'react';

export interface BaseProps {
  className?: string;
  id?: string;
}

export interface ChildrenProps extends BaseProps {
  children: ReactNode;
}

export interface SectionProps extends ChildrenProps {
  title?: string;
  subtitle?: string;
}

export interface ButtonProps extends BaseProps {
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline' | 'link';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export interface IconProps extends BaseProps {
  size?: number;
  color?: string;
}