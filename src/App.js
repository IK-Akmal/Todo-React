import { Route, Switch, Redirect } from 'react-router-dom'
import './app.css'
import AboutPage from './pages/about-page'
import HomePage from './pages/home-page'
import TodoPage from './pages/todo-page'
import Layout from './hoc/layout/layout'


function App() {

  return (
    <Layout>
      <Switch>
        <Route path={'/'} component={HomePage} exact={true} />
        <Route path={'/about'} component={AboutPage} />
        <Route path={'/todo/:id'} component={TodoPage} />

        <Redirect to={'/'} />
      </Switch>
    </Layout>
  )
}




export default App
