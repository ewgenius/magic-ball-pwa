import './styles/main.scss'

import * as React from 'react'
import { render } from 'react-dom'

import MagicBallApp from './components/MagicBallApp/MagicBallApp'

const root = document.querySelector('#root')


render(<MagicBallApp />, root)