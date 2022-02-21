import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ children, route }) {
    return (
        <>
            <Header key="header" />
            <main key={route} className="main">
                {children}
            </main>
            <Footer key="footer" />
        </>
    )
}