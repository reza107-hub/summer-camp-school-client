import Navbar from "./Pages/Shared/Navbar";

const App = () => {
  return (
    <div className="mx-auto container">
      <Navbar
        loggedIn={"f"}
        userProfilePicture={
          "https://i.ibb.co/6cMVyxm/In-Shot-20211104-190909311.png"
        }
      />
    </div>
  );
};

export default App;
