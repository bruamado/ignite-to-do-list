import { Trash } from "@phosphor-icons/react"
import styles from "./Delete.module.css"
import { InputHTMLAttributes } from "react";

export const Delete = (props: InputHTMLAttributes<HTMLInputElement> ) => {
  return <span {...props}><Trash className={styles.delete}/></span>
}