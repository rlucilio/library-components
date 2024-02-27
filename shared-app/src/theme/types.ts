export namespace Theme {
    export interface Colors {
        white: string,
        primary: string,
        secondary: string,
    }

    export interface FontSize {
        small: string,
        medium: string,
        large: string
    }
}

export interface Theme {
    colors: Theme.Colors,
    fonts: Array<string>,
    fontSizes: Theme.FontSize
}