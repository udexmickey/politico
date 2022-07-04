import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <h2>Welcome to the Politico website</h2>
        <p>Your vote count</p>
        <Link to={'/auth'}>Click here to Login</Link>
    </div>
  )
}
