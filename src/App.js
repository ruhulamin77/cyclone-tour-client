
import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/pages/Home/Home';
import AddTour from './components/pages/AddTour/AddTour';
import About from './components/pages/About/About';
import MyOrders from './components/pages/MyOrders/MyOrders';
import ManageOrders from './components/pages/ManageOrders/ManageOrders';
import Login from './components/pages/Login/Login';
import Contact from './components/pages/Contact/Contact';
import Tours from './components/pages/Tours/Tours';
import TourDetails from './components/TourDetails/TourDetails';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Footer from './components/Footer/Footer';




function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
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
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
