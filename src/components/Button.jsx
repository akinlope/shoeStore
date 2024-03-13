import React from 'react'

export const Button = ({children, ...prop}) => {
  return (
    <button {...prop}>{children}</button>
  )
}
