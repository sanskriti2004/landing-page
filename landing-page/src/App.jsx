import Profile from "./pages/Profile";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <div className="flex justify-center h-screen items-center bg-white">
        <Routes>
          <Route element={<Profile />} path="/profile" />
          <Route element={<Signup />} path="/signup" />
          <Route element={<Login />} path="/login" />
          <Route element={<Landing />} path="/" />
        </Routes>
      </div>
    </>
  );
}

export default App;
