import Home from "./routes/home/home.component";
import Navbar from "./routes/navigation/navbar.component";
import { Routes, Route } from "react-router-dom";
import SignIn from "./routes/sign-in/sign-in.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<></>} />
        <Route path="contact" element={<></>} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
