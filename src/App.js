import React from 'react';
import './App.css';
import routes from './Routes/index';
import renderRoutes from './Routes/renderRoutes';
import { BrowserRouter } from  'react-router-dom';
import { Provider } from "react-redux";
import store from "./store";

class App extends React.Component {

  render(){
    const authed = false;
    const authPath = '/';
    return (
      <Provider store={store}>
        <BrowserRouter>
            {renderRoutes(routes, authed, authPath)}
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
