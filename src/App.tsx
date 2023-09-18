import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { defaultTheme } from './styles/themes/default'
import { GloblaStyle } from './styles/global'
import { CyclesContexProvider } from './contexts/CyclesContext'


export default function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContexProvider>
          <Router />
        </CyclesContexProvider>
      </BrowserRouter>
      <GloblaStyle />
    </ThemeProvider>
  )
}