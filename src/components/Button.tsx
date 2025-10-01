import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

type Variant = 'primary' | 'secondary' | 'ghost';

type CommonProps = {
  variant?: Variant;
  size?: 'md' | 'lg';
  className?: string;
};

type NativeButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & {
  to?: undefined;
  href?: undefined;
};

type AnchorButtonProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  to?: undefined;
};

type LinkButtonProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: string;
  href?: undefined;
};

type ButtonProps = NativeButtonProps | AnchorButtonProps | LinkButtonProps;

const baseStyles =
  'inline-flex items-center justify-center rounded-xl font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:ring-offset-2 focus-visible:ring-offset-surface-muted disabled:opacity-60 disabled:cursor-not-allowed gap-2';

const variantStyles: Record<Variant, string> = {
  primary: 'bg-brand-light text-white hover:bg-brand-dark shadow-glow',
  secondary: 'border border-white/10 bg-surface-accent text-text-default hover:border-brand-light/60 hover:text-brand-light',
  ghost: 'text-text-muted hover:text-brand-light'
};

const sizeStyles = {
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base'
};

const Button = (props: ButtonProps) => {
  const { variant = 'primary', size = 'md', className, children, ...rest } = props;
  const merged = clsx(baseStyles, variantStyles[variant], sizeStyles[size], className);

  if ('to' in rest && rest.to) {
    const { to, ...linkProps } = rest;
    return (
      <Link to={to} className={merged} {...linkProps}>
        {children}
      </Link>
    );
  }

  if ('href' in rest && rest.href) {
    const { href, ...anchorProps } = rest;
    return (
      <a href={href} className={merged} {...anchorProps}>
        {children}
      </a>
    );
  }

  return (
    <button className={merged} {...rest}>
      {children}
    </button>
  );
};

export default Button;
