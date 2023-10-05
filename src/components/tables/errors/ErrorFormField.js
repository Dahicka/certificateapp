import styles from "../../../style.module.css";

export function ErrorFormField({ errors }) {
    return <div className={styles.errorFormField}>{errors ? "Required" : " "}</div>;
   }
   