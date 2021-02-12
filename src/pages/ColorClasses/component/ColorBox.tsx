import React from 'react'

import styles from './ColorBox.module.scss'

export interface ColorBoxProps {
  color: string
}

function ColorBox(props: ColorBoxProps) {
  return (
    <div className={styles.colorBox} style={{ backgroundColor: props.color }}>
      {props.color}
    </div>
  )
}

export default ColorBox
