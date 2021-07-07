import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'
import Home from './pages/home/Home'
import './app.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import UserList from './pages/userList/UserList'
import User from './pages/user/User'
import NewUser from './pages/newUser/NewUser'
import ProductList from './pages/productList/ProductList'

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Router path="/user/:userId">
            <User />
          </Router>
          <Router path="/newUser">
            <NewUser />
          </Router>
          <Router path="/products">
            <ProductList />
          </Router>
          <Router path="/products/:productsId">
            <NewUser />
          </Router>
          <Router path="/newproduct">
            <NewUser />
          </Router>
        </Switch>
      </div>
    </Router>
  )
}

export default App
