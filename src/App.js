import {Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Logo from './components/Logo'
import Home from './components/Home'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      <Header />
      <div className="app-body">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/logo" component={Logo} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </div>
)

export default App
