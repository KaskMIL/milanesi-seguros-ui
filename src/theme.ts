import { createTheme, MantineColorsTuple } from '@mantine/core';

const milanesiColors: MantineColorsTuple = [
  '#eff4fa',
  '#dee5ee',
  '#b8c9e0',
  '#90abd2',
  '#6f91c6',
  '#5a81bf',
  '#4e79bd',
  '#3f68a7',
  '#365c96',
  '#162b48'
];


export const theme = createTheme({
  primaryColor: 'milanesiColors',
  colors: {
    milanesiColors
  }
});
