import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import LogIn from './components/Authentication/LogIn/LogIn';
import Register from './components/Authentication/Register/Register';
import Breakfast from './components/Foods/Breakfast/Breakfast';
import Dinner from './components/Foods/Dinner/Dinner';
import FoodDetails from './components/Foods/FoodDetails/FoodDetails';
import Lunch from './components/Foods/Lunch/Lunch';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Menubar from './components/Header/MenuBar/MenuBar';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Shipping from './components/Shipping/Shipping';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="overflow-hidden">
      <AuthProvider>
        <BrowserRouter>
          <Menubar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/details/:foodId">
              <FoodDetails />
            </Route>
            <Route path="/login">
              <LogIn />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <PrivateRoute path="/shipping">
              <Shipping />
            </PrivateRoute>
          </Switch>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
