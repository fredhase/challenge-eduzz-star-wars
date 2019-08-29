import React from 'react';
import HeaderComp from './Header';
import MoviesInfo from './MoviesInfo';


const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderComp/>
        <MoviesInfo/>
      </header>
    </div>
  );
}

export default App;
