import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import AuthLayout from "./layouts/AuthLayout";
import SignIn from "./pages/SignIn";
import Search from "./pages/Search";
import Signup from "./pages/Signup";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Country from "./pages/admin/countries/Country";
import EditCountry from "./pages/admin/countries/EditCountry";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Web layout */}
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/search' element={<Search />}></Route>
        </Route>

        {/* login and registration layout */}
        <Route element={<AuthLayout />}>
          <Route path='/signin' element={<SignIn />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
        </Route>

        <Route
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/countries' element={<Country />}></Route>
          <Route path='/countries/:id' element={<EditCountry />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
