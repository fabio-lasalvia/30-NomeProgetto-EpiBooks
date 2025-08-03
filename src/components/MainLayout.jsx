import { Outlet } from "react-router-dom";
import MyFooter from "./MyFooter";
import MyNav from "./MyNav";


function MainLayout() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <MyNav />

            <main className="flex-grow-1">
                <Outlet/>
            </main>

            <MyFooter />
        </div>
    )
}

export default MainLayout