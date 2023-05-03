import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import PageLayout from './components/PageLayout/PageLayout';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import TourDetails from './components/TourDetails/TourDetails';
import About from './components/pages/About/About';
import AddTour from './components/pages/AddTour/AddTour';
import Contact from './components/pages/Contact/Contact';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import ManageOrders from './components/pages/ManageOrders/ManageOrders';
import MyOrders from './components/pages/MyOrders/MyOrders';
import Tours from './components/pages/Tours/Tours';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <PageLayout>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route exact path="/home">
                <Home></Home>
              </Route>
              <Route exact path="/tours">
                <Tours></Tours>
              </Route>
              <PrivateRoute exact path="/addTour">
                <AddTour></AddTour>
              </PrivateRoute>
              <PrivateRoute exact path="/myOrders">
                <MyOrders></MyOrders>
              </PrivateRoute>
              <PrivateRoute exact path="/manageOrders">
                <ManageOrders></ManageOrders>
              </PrivateRoute>
              <Route exact path="/about">
                <About></About>
              </Route>
              <Route exact path="/contact">
                <Contact></Contact>
              </Route>
              <Route exact path="/login">
                <Login></Login>
              </Route>
              <PrivateRoute exact path="/tours/tourDetails/:tourId">
                <TourDetails></TourDetails>
              </PrivateRoute>
            </PageLayout>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
