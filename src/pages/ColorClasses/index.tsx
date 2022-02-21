import React from 'react'

// utils
import chroma from 'chroma-js'

// UI component
import { SketchPicker } from 'react-color'
import ColorBox from './component/ColorBox'

// styles
import styles from './styles.module.css'

class ColorClasses extends React.Component {
  state = {
    pickerStartColor: '#ffebc5',
    pickerEndColor: '#581d00',
    segment: 6,
    colorArray: chroma.scale(['#ffebc5', '#581d00']).classes(6).colors(6),
  }

  componentDidMount() {
    // console.log(chroma.scale(['#fafa6e', '#2A4858']).classes(5).colors(5))
  }

  handleSegmentChange = (e: any) => {
    const { pickerStartColor, pickerEndColor } = this.state
    this.setState({
      segment: e.target?.value,
    })
    this.handleGenColorArray(pickerStartColor, pickerEndColor, e.target?.value)
  }

  handleStartColorChange = (color: any) => {
    const { pickerEndColor } = this.state
    this.setState({
      pickerStartColor: color?.hex,
    })
    this.handleGenColorArray(color?.hex, pickerEndColor)
  }

  handleEndColorChange = (color: any) => {
    const { pickerStartColor } = this.state
    this.setState({
      pickerEndColor: color?.hex,
    })
    this.handleGenColorArray(pickerStartColor, color?.hex)
  }

  handleGenColorArray = (
    startColor: string,
    endColor: string,
    segmentRealtime: any = null
  ) => {
    const { segment } = segmentRealtime
      ? { segment: segmentRealtime }
      : this.state
    this.setState({
      colorArray: chroma
        .scale([startColor, endColor])
        .classes(segment)
        .colors(segment),
    })
  }

  render() {
    const { pickerStartColor, pickerEndColor, colorArray, segment } = this.state

    return (
      <div className={styles.wrapper}>
        <div className={styles.colorPicker}>
          <div className={styles.title}>
            分层数
            <input
              type="text"
              value={segment}
              onChange={this.handleSegmentChange}
            />
          </div>
          <div>Start: {pickerStartColor}</div>
          <SketchPicker
            color={pickerStartColor}
            onChange={this.handleStartColorChange}
          />
          <div>End: {pickerEndColor}</div>
          <SketchPicker
            color={pickerEndColor}
            onChange={this.handleEndColorChange}
          />
        </div>
        <div className={styles.colorWrapper}>
        {colorArray.length > 0 ? (
          <div>
            {colorArray.map((color, index) => {
              return <ColorBox color={color} key={`color-${index}`} />
            })}
          </div>
        ) : null}
        </div>
      </div>
    )
  }
}

export default ColorClasses
