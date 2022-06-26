import Link from 'next/link'
import AlertDialogDemo from '../components/AlertDialog'
import styles from '../styles/Home.module.css'

const Account = () => {
  return (
    <div className={styles.main}>
      <h1>Logged In!</h1>
      <AlertDialogDemo />
    </div>
  )
}

export default Account
