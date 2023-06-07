import { Outlet } from "react-router-dom";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";

const App = () => {
  return (
    <>
      <div className="mx-auto container">
        <Navbar
          loggedIn={null}
          userProfilePicture={
            "https://i.ibb.co/6cMVyxm/In-Shot-20211104-190909311.png"
          }
        />
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
