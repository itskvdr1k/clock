import { useThemeContext } from "../../context/ThemeContext"

export default function Header() {
    const { toggleTheme } = useThemeContext()
    return (
        <header className="header">
            <h1 className="header__title" onClick={() => toggleTheme()}>Clock</h1>
        </header>
    )
}