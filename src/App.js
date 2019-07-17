import React from 'react';
import { Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
// import Performance from './Components/Performance/Performance';
// import Booking from './Components/Booking/Booking';
import Company from './Components/Company/Company';
import AdminEvents from './Components/AdminEvents/AdminEvents';
import EventManager from './Components/EventManager/EventManager';

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      {/* <Route path="/" exact component={Performance} /> */}
      {/* <Route path="/booking" exact component={Booking} /> */}
      <Route path="/compagny" exact component={Company} />
      <Route path="/admin" exact component={AdminEvents} />
      {/* <Route path="/" exact component={EventManager} /> */}
      <Route path="/events/*" exact component={EventManager} />
      <Footer />
    </div>
  );
}

export default App;
