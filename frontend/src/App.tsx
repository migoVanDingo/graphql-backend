import { useMemo } from 'react'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ApolloProvider } from '@apollo/client'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { store } from './store'
import { apolloClient } from './apollo/client'
import { router } from './routes/router'
import { getTheme } from './config/theme'
import { useAppSelector } from './store/hooks'

const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  const themeMode = useAppSelector((state) => state.theme.mode)
  const theme = useMemo(() => getTheme(themeMode), [themeMode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

function App() {
  return (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <ThemeWrapper>
          <RouterProvider router={router} />
        </ThemeWrapper>
      </ApolloProvider>
    </Provider>
  )
}

export default App
