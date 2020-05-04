import React from 'react';
import './App.css';
import routes from './Routes/index';
import renderRoutes from './Routes/renderRoutes';
import { BrowserRouter } from  'react-router-dom';

class App extends React.Component {

  render(){
    const authed = false;
    const authPath = '/';
    return (
      <BrowserRouter>
          {renderRoutes(routes, authed, authPath)}
      </BrowserRouter>
    );
  }
}

export default App;
