import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";
import useAuth from "./Hooks/useAuth";
import { useState } from "react";

const App = () => {
  const {user} = useAuth()
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <div className={isDarkTheme ? "dark-theme" : "light-theme"}>
      <div>
        <Navbar
          loggedIn={user}
          userProfilePicture={user?.photoURL}
          isDarkTheme={isDarkTheme}
          toggleTheme={toggleTheme}
        />
      </div>
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default App;
