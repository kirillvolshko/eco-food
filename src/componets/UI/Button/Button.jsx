import React from 'react'
import classes from './Button.module.css'
function Button(props) {
  const isSmall = props.small
  return (
    <button className={`${classes.MyButton} ${isSmall ? classes.SmallButton : classes.LargeButton}`}>{props.children}</button>
  )
}

export default Button