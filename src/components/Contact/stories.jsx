import React from 'react';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../styles/theme.js';
import { GlobalStyles } from '../../styles/global-styles.js';
import Contact from '.';

export default {
  title: 'Contact',
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        light: lightTheme,
        dark: darkTheme,
      },
      defaultTheme: 'dark',
      Provider: ThemeProvider,
      GlobalStyles,
    }),
  ],
};

export const Default = () => {
  return <Contact />;
};
