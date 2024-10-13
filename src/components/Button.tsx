import { ButtonHTMLAttributes, ReactElement } from "react"
import styles from "./Button.module.css"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children?: ReactElement;
}

export const Button = ({children, ...props}: ButtonProps) => {
  return <button {...props} className={styles.button}>{children}</button>
}