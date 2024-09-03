import React from 'react'
import "./Button.css"
const Button = ({children}) => {
  return (
    <div>
      <button className="btn-60"><span>{children}</span></button>
    </div>
  )
}

export default Button
