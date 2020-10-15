import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { userContex } from '../../App';

const PrivateRoute = ({children,...rest}) => {
    const [isloggedIn,setloggedIn] = useContext(userContex)
    return (
        <div>
        <Route
           {...rest}
           render={({ location }) =>
           isloggedIn.email ? (
                           children
                   ) : (
       <Redirect
       to={{
         pathname: "/login",
         state: { from: location }
       }}
     />
   )
 }
/>
   </div>
    );
};

export default PrivateRoute;