import { Check } from "@phosphor-icons/react"
import styles from "./CircleCheckbox.module.css";
import { AllHTMLAttributes } from "react";

interface CircleCheckboxProps extends AllHTMLAttributes<HTMLSpanElement> {
  checked: boolean;
  onClick: () => void;
}

export const CircleCheckbox = ({checked, onClick, className, ...props}: CircleCheckboxProps) => {
  if (checked) return <span className={`${styles.checked} ${className}`} onClick={onClick} {...props}><Check /></span>;
  return <span className={`${styles.unchecked} ${className}`} onClick={onClick} {...props}></span>;
}