import React, { Component } from 'react';
import SimpleAppBar from './components/header'
import SimpleTable from './components/table'
import TemporaryDrawer from './components/drawer'
import SimpleTooltips from './components/tooltips'

export default class App extends Component {
  render() {
    return (
      <div>
          <SimpleAppBar />
          <TemporaryDrawer />
          <SimpleTable />
          <SimpleTooltips />
      </div>
    )
  }
}


