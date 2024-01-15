export const darkTheme = {
  name: 'darkTheme',
  colors: {
    blue: '#3A6FF8',
    blueDark: 'hsl(215, 82%, 22%)',
    white: 'hsl(0, 0%, 100%)',
    elements: 'hsl(0, 0%, 100%)',
    purple: 'hsl(248, 19%, 14%)',
    primary: '#26262C',
    primaryLight: '#31343B',
    secondary: '#1C1C20',
    gray: '#8c9ea8',
    gold: '#F7E5C3',
    correct: '#ccf7c3',
    correctRGB: '204, 247, 195',
    bad: '#f7cbc3',
    badRGB: '247, 203, 195',
    transparent: 'hsla(0, 0%, 0%, 0.0);',
  },
  fonts: {
    light: 300,
    bold: 600,
  }
}

export const lightTheme = {
  ...darkTheme,
  name: 'lightTheme',
  colors: {
    ...darkTheme.colors,
    primary: '#F6F6F6',
    primaryLight: '#FAFAFA',
    secondary: '#FFFFFF',
    elements: '#030303',
    correct: '#4CAF50',
    correctRGB: '75, 175, 80',
    bad: '#ff8c00',
    badRGB: '255, 140, 0',
    gold: '#444444',
    gray: '#555f64',
  },
};