import React from 'react';
import './button.css';

interface ButtonProps {
  /**
   * 是否设置为页面的主要调用按钮？
   */
  primary?: boolean;
  /**
   * 设置按钮的背景颜色
   */
  backgroundColor?: string;
  /**
   * 选择按钮的大小
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * 按钮的内容
   */
  label: string;
  /**
   * 在点击按钮时执行的可选处理程序
   */
  onClick?: () => void;
}

/**
 * 用户交互的主要UI组件
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
