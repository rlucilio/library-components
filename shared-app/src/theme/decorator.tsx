import { ThemeProvider } from "styled-components";
import defaultTheme from "./default.theme";

export default (Story: any) => (
    <ThemeProvider theme= {defaultTheme} > {Story()} </ThemeProvider>
)