import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import {getLocalstorage} from "../helper";

const renderRoutes = (routes, authed, authPath, extraProps = {}, switchProps = {}) => routes ? (
    <Switch {...switchProps}>
        {routes.map((route, i) => (
        <Route
            key={route.key || i}
            path={route.path}
            exact={route.exact}
            strict={route.strict}
            render={(props) => {
            
                if( !route.restricted || authed || route.path == authPath) {
                    return <route.component {...props} {...extraProps} route={route}/>
                }
            const redirPath = authPath ? authPath : '/'
            return <Redirect to={{pathname: redirPath, state: {from: props.location}}}/>
            }}
        />
        ))}
    </Switch>
) : null

// class renderRoutes extends Component {
//     render(){
//         const {routes, authed, authPath, extraProps = {}, switchProps = {}} = this.props;
//         if(getLocalstorage("isAuthenticated")){authed = true}
//         return (
//             <Switch {...switchProps}>
//                 {routes && routes.map((route, i) => (
//                     <Route
//                         key={route.key || i}
//                         path={route.path}
//                         exact={route.exact}
//                         strict={route.strict}
//                         render={(props) => {
                        
//                             if( !route.restricted || authed || route.path == authPath) {
//                                 return <route.component {...props} {...extraProps} route={route}/>
//                             }
//                         const redirPath = authPath ? authPath : '/'
//                         return <Redirect to={{pathname: redirPath, state: {from: props.location}}}/>
//                         }}
//                     />
//                 ))}
//             </Switch>
//         );
//     }
// }

export default renderRoutes;