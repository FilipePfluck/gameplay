import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        colors: {
            background: string,
            heading: string,
            primary: string,
            line: string
        }
    }
}