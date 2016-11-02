import './MagitBallApp.scss'
import * as React from 'react'
import { Props, Component } from 'react'

export interface MagicBallAppProps extends Props<MagicBallApp> {

}

export interface MagicBallAppState {

}

export default class MagicBallApp extends Component<MagicBallAppProps, MagicBallAppState> {
  constructor() {
    super()
    if (window['DeviceOrientationEvent']) {
      window.addEventListener('deviceorientation', (e: DeviceOrientationEvent) => {
        console.log(e)
      }, false)
    }

    if (window['DeviceMotionEvent']) {
      window.addEventListener('devicemotion', (e: DeviceMotionEvent) => {
        console.log(e.acceleration)
      }, false)
    }
  }

  render() {
    return <div className='magicball-app'>
    </div>
  }
} 