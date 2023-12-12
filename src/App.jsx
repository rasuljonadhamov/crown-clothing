import { Route, Routes } from "react-router-dom";
import Navigation from "./Routes/Navigation/Navigation";
import Home from "./Routes/Home/Home";

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
      </Route>
    </Routes>
  );
}

export default App;
