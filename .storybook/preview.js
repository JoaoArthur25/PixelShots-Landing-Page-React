import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../src/styles/theme';
import { withThemeFromJSXProvider } from "@storybook/addon-styling"
import { GlobalStyles } from '../src/styles/global-styles.js';

 export const decorators = [
   withThemeFromJSXProvider({
    themes: {
       light: lightTheme,
       dark: darkTheme
     },
     defaultTheme: 'dark',
     Provider: ThemeProvider,
     GlobalStyles
   })
 ];
