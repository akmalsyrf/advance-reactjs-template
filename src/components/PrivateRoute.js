// import necessary utility from rrd
import { Redirect, Route } from "react-router";

// create component here
export default function PrivateRoute({ component: Component, ...rest }) {
  //assume that user is not login
  const isLogin = false;

  return (
    <>
      <Route {...rest} render={(props) => (isLogin ? <Component {...props} /> : <Redirect to="/signin" />)} />
    </>
  );
}
