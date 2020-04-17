import React from 'react';
import './App.css';
import routes from './Routes/index';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from  'react-router-dom';

class App extends React.Component {

  render(){
    return (
      <BrowserRouter>
          {renderRoutes(routes)}
      </BrowserRouter>
    );
  }
}

export default App;
