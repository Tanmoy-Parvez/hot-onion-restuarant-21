import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import LogIn from './components/Authentication/LogIn/LogIn';
import Breakfast from './components/Foods/Breakfast/Breakfast';
import Dinner from './components/Foods/Dinner/Dinner';
import FoodDetails from './components/Foods/FoodDetails/FoodDetails';
import Lunch from './components/Foods/Lunch/Lunch';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Shipping from './components/Shipping/Shipping';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="overflow-hidden">
      <AuthProvider>
        <BrowserRouter>
          <Home />
          <Switch>
            <Route path="/breakfast">
              <Breakfast />
            </Route>
            <Route path="/lunch">
              <Lunch />
            </Route>
            <Route path="/dinner">
              <Dinner />
            </Route>
            <Route path="/details/:foodId">
              <FoodDetails />
            </Route>
            <Route path="/login">
              <LogIn />
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
