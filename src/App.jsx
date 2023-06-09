import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";
import useAuth from "./Hooks/useAuth";

const App = () => {
  const {user} = useAuth()
  return (
    <>
      <div>
        <Navbar loggedIn={user} userProfilePicture={user?.photoURL} />
      </div>
      <Outlet />
      <Footer />
      <ScrollRestoration/>
    </>
  );
};

export default App;
