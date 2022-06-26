import React from 'react'

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
    <div>
      <button onClick={() => ssoHandler()}>SSO</button>
    </div>
  )
}

export default Sso
