import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import { theme } from './themes/theme'
import App from './app'
import reportWebVitals from './reportWebVitals'
import { persistor, store } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import AuthProvider from './context/auth_context'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
  <AuthProvider>
    <Provider store={store}>
      <PersistGate loading='null' persistor={persistor}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
            <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </AuthProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
