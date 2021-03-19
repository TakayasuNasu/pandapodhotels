import React from 'react'
import { Reset } from 'styled-reset'

import Index from './pages/Index'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <React.Fragment>
      <Reset />
      <Header />
      <Index />
      <Footer />
    </React.Fragment>
  )
}

export default App