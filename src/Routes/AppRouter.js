import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { InicioSesion } from "../Components/Login/Login";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InicioSesion />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
