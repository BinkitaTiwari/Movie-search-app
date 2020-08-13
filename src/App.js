import React from 'react';
import MovieSearch from '../src/MovieSearch';
import Favourites from './Components/Favourites/Favourites';
import {Switch,Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Switch>
        <Route exact path ="/" component={MovieSearch} />
         <Route exact path="/favourites" component={Favourites}/>
         
        
       </Switch>
        
        
      </header>
    </div>
  );
}

export default App;
