import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../Components/Home/Home";
import { InicioSesion } from "../Components/Login/Login";
import { RegisterEmployer } from "../Components/Login/RegisterEmployer";
import { NavBar } from "../Components/NavBar/NavBar";

function AppRouter() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/companies/new" element={<RegisterEmployer />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
