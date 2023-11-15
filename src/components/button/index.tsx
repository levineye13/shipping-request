import React, { FC, ReactElement } from 'react';

import styles from './index.module.scss';

interface IButton {
  readonly children: string;
  readonly type: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  readonly onClick: () => void;
  readonly className?: string;
  readonly color?: 'blue' | 'white';
}

const Button: FC<IButton> = ({
  children,
  type,
  onClick,
  className,
  color,
}): ReactElement => {
  const typeColor = color === 'white' ? styles.button_white : '';

  return (
    <button
      className={`${styles.button} ${typeColor} ${className || ''}`}
      type={type || 'button'}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
