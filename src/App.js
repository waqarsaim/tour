import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Display from './Components/Display';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import View from "./Components/View"
import Hotel from './Components/Hotel';
function App() {
  return (

    <Router>
   
      <Switch>
        <Route path='/' exact component={Navbar} />
        {/* <Route path='/' exact component={View} /> */}

       
      </Switch>
      
      <View />
      
      <Footer />
    </Router>
   
  );
}

export default App;