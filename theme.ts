const colors = {
  WHITE: '#fcfffc',
  GREY: {
    100: '#f0f3f2',
    200: '#e8eaec',
    300: '#92989d',
    350: '#828a95',
    400: '#818685',
    500: '#7a8aa4',
    600: '#777f84',
  },
  ACCENTS: {
    BLUE: {
      light: '#e2eefc',
      main: '#0064e7',
    },
    PURPLE: {
      light: '#e9eafb',
      main: '#7766e3',
    },
    GREEN: {
      light: '#e1fbee',
      main: '#0db155',
    },
    ORANGE: {
      light: '#fdf4e2',
      main: '#ff9000',
    },
    CYAN: {
      light: '#e5f6fd',
      main: '#07a7f2',
    },
    RED: {
      light: '#feecec',
      main: '#fa474f',
    },
    TEAL: {
      light: '#e5f8f1',
      main: '#05ad89',
    },
    PINK: {
      light: '#fdeefa',
      main: '#ed4adf',
    },
  },
  PRIMARY() {
    return this.ACCENTS.BLUE
  },
  DANGER() {
    return this.ACCENTS.RED
  },
  WARNING() {
    return this.ACCENTS.ORANGE
  },
  BLACK: '#030d1f',
}

const theme = {
  colors,
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    xxl: 32,
  },
  font: {
    bold: 'Metropolis-Bold',
    semibold: 'Metropolis-SemiBold',
    medium: 'Metropolis-Medium',
    regular: 'Metropolis-Regular',
    light: 'Metropolis-Light',
  },
}

export default theme
