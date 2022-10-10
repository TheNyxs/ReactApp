import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Home from './component/home';
import About from './component/about';

import Navbar from './navigation/navbar.js';
import Footer from './component/footer.js';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      <header>
        <div>
          <Navbar />
        </div>
      </header>
      <main className="App-header">
        <div>
          <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/about' element={< About />}></Route>
          </Routes>
        </div>
      </main>
      <footer className="py-3 my-4">
        <div>
          <Footer />
        </div>
      </footer>
      </div>
    </Router>
  );
}

export default App;
