import React from 'react';
import './App.css';
import { PopularMoviesComponent } from './Components/PopularMoviesComponent';
import { Route } from 'react-router';
import { MovieComponent } from './Components/MovieComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      <Route exact path='/' component={PopularMoviesComponent} />
      <Route exaxt path='/movie/:movieId' component={MovieComponent} />
    </div>
  );
}

export default App;
