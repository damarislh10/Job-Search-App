import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../Components/Home/Home";
import { LoginEmployeer } from "../Components/Login/LoginEmployeer";
import { RegisterEmployee } from "../Components/Login/RegisterEmployee";
import { RegisterEmployer } from "../Components/Login/RegisterEmployer";
import { NavBar } from "../Components/NavBar/NavBar";

function AppRouter() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/companies/new" element={<RegisterEmployer />} />
        <Route path="/webpros/login" element={<RegisterEmployee />} />
        <Route path="/members/auth/login" element={<LoginEmployeer />} />

     </Routes>
    </Router>
  );
}

export default AppRouter;
