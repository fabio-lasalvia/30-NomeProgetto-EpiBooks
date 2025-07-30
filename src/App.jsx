import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./components/MainLayout";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import BookDetails from "./components/BookDetails";

import ProtectedRoutes from "./pages/ProtectedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout principale con navbar + footer */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="books/:asin" element={<BookDetails />} />

          {/* Rotte protette */}
          <Route element={<ProtectedRoutes />}>
            {/* <Route path="profile" element={<UserProfile />} /> */}
            {/* <Route path="cart" element={<Cart />} /> */}
          </Route>

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
