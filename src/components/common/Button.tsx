import React from "react";
import { Button as AntdButton, ButtonProps as AntdButtonProps } from "antd";

import styles from "./styles.module.css";

export interface ButtonProps extends AntdButtonProps {
  children?: React.ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <AntdButton className={styles.button} {...props}>
      {children}
    </AntdButton>
  );
};

export default Button;
