import React from 'react'
import { Reset } from 'styled-reset'

import Index from './pages/Index'
import Header from './components/Header'

const App = () => {
  return (
    <React.Fragment>
      <Reset />
      <Header />
      <Index />
    </React.Fragment>
  )
}

export default App