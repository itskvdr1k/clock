import { Dispatch, FC, PropsWithChildren, SetStateAction, createContext, useCallback, useContext, useState } from "react";

export interface ThemeContextInterface {
    theme: "light" | "dark",
    setTheme: Dispatch<SetStateAction<"light" | "dark">>,
    toggleTheme: () => void
}

const ThemeContext = createContext({} as ThemeContextInterface)

export const useThemeContext = () => {
    return useContext(ThemeContext)
}

export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [theme, setTheme] = useState("light" as "light" | "dark")

    const toggleTheme = useCallback(() => {
        setTheme(prev => {
            return prev === "light" ? "dark" : "light"
        })
    }, [setTheme])

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}