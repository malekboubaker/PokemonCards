import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserDetails from "./pages/UserDetails";
import Navbar from "./components/Navbar";
import UserCards from "./components/Usercards";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<UserDetails />} />
      </Routes>
    </div>
  );
}
