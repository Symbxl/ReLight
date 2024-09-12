import Image from "next/image"
import styles from "../page.module.css"

export default function Navigation() {
  return (
    <div className={styles.navigation}>
      <p>
        Download our &nbsp;
        <code className={styles.app}>MOBILE APP</code>
        &nbsp; today!
      </p>
      <div>
        <Image
          src="/relight.svg"
          alt="Relight Logo"
          className={styles.relightLogo}
          width={100}
          height={24}
          priority
        />
      </div>
    </div >
  )
}