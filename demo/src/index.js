import React, { Component } from 'react'
import { render } from 'react-dom'
import Paper from '@mui/material/Paper';

import Example from '../../src'

export default class Demo extends Component {
  render() {
    return <div>
      <h1>Double-drawer Demo</h1>
      <Paper elevation={8} >
        <Example />
      </Paper>
    </div>
  }
}

render(<Demo />, document.querySelector('#demo'))
