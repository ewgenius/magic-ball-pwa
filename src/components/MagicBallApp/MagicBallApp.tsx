import './MagitBallApp.scss'
import * as React from 'react'
import { Props, Component } from 'react'
import { Flex, Box } from 'reflexbox'

export enum ControlType {
  CLICK,
  ORIENTATION
}

export interface MagicBallAppProps extends Props<MagicBallApp> { }

export interface MagicBallAppState {
  controlType?: ControlType,
  accelerationX?: number
  accelerationY?: number
  accelerationZ?: number
  alpha?: number
  beta?: number
  gamma?: number
}

export default class MagicBallApp extends Component<MagicBallAppProps, MagicBallAppState> {
  constructor() {
    super()

    this.state = {
      controlType: ControlType.CLICK,
      accelerationX: 0,
      accelerationY: 0,
      accelerationZ: 0,
      alpha: 0,
      beta: 0,
      gamma: 0
    }

    if (window['DeviceOrientationEvent']) {
      window.addEventListener('deviceorientation', (e: DeviceOrientationEvent) => {
        this.onOrientation(e)
      }, false)
    }

    if (window['DeviceMotionEvent']) {
      window.addEventListener('devicemotion', (e: DeviceMotionEvent) => {
        this.onMotion(e)
      }, false)
    } else {
      this.setState({
        controlType: ControlType.ORIENTATION
      })
    }
  }

  onOrientation(event: DeviceOrientationEvent) {
    this.setState({
      alpha: event.alpha,
      beta: event.beta,
      gamma: event.gamma
    })
  }

  onMotion(event: DeviceMotionEvent) {
    this.setState({
      accelerationX: event.acceleration.x,
      accelerationY: event.acceleration.y,
      accelerationZ: event.acceleration.z
    })
  }

  render() {
    return <Flex
      flexColumn
      className='magicball-app'
      >
      <Flex align='center'>
        x: {this.state.accelerationX}<br />
        y: {this.state.accelerationY}<br />
        z: {this.state.accelerationZ}<br />

        alpha: {this.state.alpha}<br />
        beta: {this.state.beta}<br />
        gamma: {this.state.gamma}<br />
      </Flex>
      <Flex
        align='center'
        justify='center'
        flexAuto>
        <Box
          align='center'
          style={{
            width: 200,
            height: 200,
            backgroundColor: '#000',
            transform: `rotateZ(${this.state.alpha - 180}deg) rotateX(${this.state.beta}deg) rotateY(${-this.state.gamma}deg)`
          }}></Box>
      </Flex>
    </Flex>
  }
} 