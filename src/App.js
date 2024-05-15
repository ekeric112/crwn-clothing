import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navaigation.component";
import Authentication from "./routes/authentication/authentication.component";

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

// Putting path="/home" means that going to http://localhost:3000/home routes to the Home page
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
