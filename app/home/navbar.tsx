import styles from "../page.module.css"

export default function Navigation() {
  return (
    <div className={styles.navigation}>
      <p>
        Download our &nbsp;
        <code className={styles.app}>MOBILE APP</code>
        &nbsp; today!
      </p>
    </div >
  )
}