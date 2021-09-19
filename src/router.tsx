import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { GlobalStateProvider } from './context/GlobalContext'
import Home from './pages/Home'
import Login from './pages/Login'
import { GlobalStyles } from './styles/GlobalStyles'
import ThemeProvider from './styles/ThemeProvider'
import 'react-toastify/dist/ReactToastify.css'

const Routes = () => {
  return (
    <GlobalStateProvider>
      <Router>
        <GlobalStyles />
        <ToastContainer newestOnTop={true} theme="colored" />
        <ThemeProvider>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </ThemeProvider>
      </Router>
    </GlobalStateProvider>
  )
}

export default Routes
