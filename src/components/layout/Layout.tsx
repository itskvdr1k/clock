import { PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useThemeContext } from "../../context/ThemeContext";

export default function Layout({ children }: PropsWithChildren) {
    const { theme } = useThemeContext()
    return (
        <div className={`wrapper ${theme === "dark" ? "dark" : ""}`}>
            <Header/>
            <main className="main">
                {children}
            </main>
            <Footer/>
        </div>
    )
}