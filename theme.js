// In this file we're creating custom themes

import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

const breakpoints = createBreakpoints({
    sm: '375px',
    md: '580px',
    lg: '768px',
    xl: '1024px',
    '2xl': '1280px',
});

const fontSizes = {
    custom1: '10rem',
    sm: '1.3rem'
}

const config = {
    initialColorMode: 'dark'
}

const theme = extendTheme({ config, fontSizes, breakpoints })

export default theme