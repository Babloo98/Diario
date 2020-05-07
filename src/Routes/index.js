import Homepage from '../components/homepage/index';
import Dashboard from '../components/Dashboard/index';
// import Home from '../components/Dashboard/Home/index'

const routes = [
    {
      path : "/",
      exact : true,
      restricted: false,
      component : Homepage
    },   
    {
      component: Dashboard,
      restricted: true,
      routes: [
        {
          path : "/Dashboard",
          exact : true,
          component : Dashboard
        }
      ]
    }
  ];

  export default routes;