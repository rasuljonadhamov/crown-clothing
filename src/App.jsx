import { Route, Routes } from "react-router-dom";
import Navigation from "./Routes/Navigation/Navigation";
import Home from "./Routes/Home/Home";
import SiginIn from "./Routes/SiginIn/SiginIn";

const Shop = () => {
  return (
    <div>
      <h1>I am the Shop </h1>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SiginIn />} />
      </Route>
    </Routes>
  );
}

export default App;
