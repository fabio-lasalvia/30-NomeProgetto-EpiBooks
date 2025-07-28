import "./App.css";

import { Routes, Route } from "react-router-dom";

import MainLayout from "./components/MainLayout";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
