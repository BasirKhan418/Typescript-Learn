import React from 'react'
import User from './User'
const page = () => {
  return (
    <div>
      <User name='John' age={20} />
      <User name='Doe' age={30} />
      <User name='Smith' age={40} />
    </div>
  )
}

export default page
