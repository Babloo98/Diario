import Homepage from '../components/homepage/index';
import Dashboard from '../components/Dashboard/index';
import Home from '../components/Dashboard/Home/index'

const routes = [
    {
      path : "/",
      exact : true,
      restricted: false,
      component : Homepage
    },   
    {
      component: Dashboard,
      path : "/dashboard/home",
      exact : true,
      restricted: false,
    }, 
    {
      component: Dashboard,
      path : "/dashboard/diaries",
      exact : true,
      restricted: false,
    }, 
    {
      component: Dashboard,
      path : "/dashboard/filter",
      exact : true,
      restricted: false,
    }, 
  ];

  export default routes;