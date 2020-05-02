import App from "../App";
import Homepage from '../components/homepage/index';
import Dashboard from '../components/Dashboard/index';
import Home from '../components/Dashboard/Home/index'

const routes = [
    {
        path : "/",
        exact : true,
        component : Homepage
    },
    {
      component: Dashboard,
      routes: [
        {
          path : "/dashboard",
          exact : true,
          component : Dashboard
        },
      ]
    },    
  ];

  export default routes
   