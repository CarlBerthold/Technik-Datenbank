import React from 'react';
//import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import TechnikListPage from './pages/TechnikListPage';
import { Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import TechnikDetailsPage from './pages/TechnikDetailsPage';
import AddTechnik from './components/AddTechnik';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
        <Switch>
        <Route exact path="/" component={HomePage} />
          <Route exact path="/techniks" component={TechnikListPage} />
          <Route exact path="/techniks/add" component={AddTechnik} />
          <Route exact path="/techniks/:id" component={TechnikDetailsPage} />

        </Switch>
      </header>
    </div>
  );
}

export default App;
