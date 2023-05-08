import React from 'react'
import Link from 'next/link';


interface Props {}

const index = () => {
  return (
  
  <div>

    <h1>Choose the date page</h1>
    <Link href= "/choose-menu">
  
  <button>Next!</button>
  
  </Link>
  <Link href="/">
  
  <button>Home!</button>
  
  </Link>
  </div>
  )
}

export default index