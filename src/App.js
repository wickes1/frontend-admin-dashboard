import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'
import Home from './pages/home/Home'
import './app.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import UserList from './pages/userList/UserList'
import User from './pages/user/User'
import NewUser from './pages/newUser/NewUser'
import ProductList from './pages/productList/ProductList'
import Product from './pages/product/Product'

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
          <Router exact path="/products">
            <ProductList />
          </Router>
          <Router path="/product/:productId">
            <Product />
          </Router>
          <Router path="/newproduct"></Router>
        </Switch>
      </div>
    </Router>
  )
}

export default App
