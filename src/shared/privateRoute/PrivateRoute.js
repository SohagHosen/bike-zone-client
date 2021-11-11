import { Route, Redirect } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import LinearProgress from '@mui/material/LinearProgress';
import { Box } from "@mui/system";

function PrivateRoute({ children, ...rest }) {
  let { user, loading } = useAuth();
  if (loading) {
    return <Box sx={{ minHeight: "calc(100vh - 218px)" }}>
      <LinearProgress />
    </Box>
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
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
  );
}
export default PrivateRoute