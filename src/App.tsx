import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { defaultTheme } from './styles/themes/default'
import { GloblaStyle } from './styles/global'


export default function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GloblaStyle />
    </ThemeProvider>
  )
}