import { Check, Divide } from "@phosphor-icons/react"
import styles from "./CircleCheckbox.module.css";

interface CircleCheckboxProps {
  checked: boolean;
  onClick: () => void;
}

export const CircleCheckbox = ({checked, onClick}: CircleCheckboxProps) => {
  if (checked) return <span onClick={onClick} className={styles.checked}><Check /></span>;
  return <span onClick={onClick} className={styles.unchecked}></span>;
}