import styles from '../styles/Sso.module.css'

const Sso = () => {
  const ssoHandler = async () => {
    try {
      const res = await fetch('/api/sso', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message)
      }

      window.location.href = data.authorizationURL
    } catch (e) {
      alert('error')
    }
  }

  return (
    <div className={styles.main}>
      <button onClick={() => ssoHandler()} className={styles.button}>
        Sign In With Okta
      </button>
    </div>
  )
}

export default Sso
