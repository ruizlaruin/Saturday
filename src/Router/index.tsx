import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Details from "../Pages/Details";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
