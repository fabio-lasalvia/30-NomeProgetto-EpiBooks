import MyFooter from "./MyFooter";
import MyNav from "./MyNav";


function MainLayout({ children }) {
    return (
        <div className="d-flex flex-column min-vh-100">
            <MyNav />

            <main className="flex-grow-1">
                {children}
            </main>

            <MyFooter />
        </div>
    )
}

export default MainLayout