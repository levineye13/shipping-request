import React, { FC, ReactElement } from 'react';

import styles from './index.module.scss';

interface IButton {
  readonly children: string;
  readonly type: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  readonly onClick: () => void;
  readonly className?: string;
}

const Button: FC<IButton> = ({
  children,
  type,
  onClick,
  className,
}): ReactElement => {
  return (
    <button
      className={`${styles.button} ${className || ''}`}
      type={type || 'button'}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
