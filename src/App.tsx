import { useAuth0 } from "@auth0/auth0-react";
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";
import LogoutButton from "./components/LogoutButton/LogoutButton";

const App = () => {
  const { isAuthenticated, user } = useAuth0();
  isAuthenticated && console.log(user);

  return (
    <div className="App">
      <AnimatedRoutes />
      {isAuthenticated && <LogoutButton />}
    </div>
  );
};

export default App;
