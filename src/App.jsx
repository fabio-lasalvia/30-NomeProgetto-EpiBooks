import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./components/MainLayout";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import BookDetails from "./components/BookDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/books/:asin" element={<BookDetails />}></Route>
            <Route path="*" element={<NotFound />}></Route>

            <Route element={<ProtectedRoutes/>}>


            </Route>

            {/* <Route element={<GuestRoutes/>}></Route> */}

          </Routes>
        </MainLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
