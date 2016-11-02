import * as React from 'react'
import { Props, Component, HTMLAttributes } from 'react'

export interface TriangleProps extends Props<Triangle>, HTMLAttributes<HTMLDivElement> {

}

export default class Triangle extends Component<TriangleProps, {}> {
  render() {
    const style = Object.assign({}, this.props.style)
    return <div style={{ style }}></div>
  }
}