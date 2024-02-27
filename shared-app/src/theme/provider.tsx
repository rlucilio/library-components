import { ThemeProvider } from "styled-components";
import defaultTheme from "./default.theme";

export default ({ children }: { children: React.ReactNode }) => (
    <ThemeProvider theme= { defaultTheme } > { children } </ThemeProvider>
)