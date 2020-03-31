export default {
  initialColorModeName: 'light',
  useBodyStyles: true,
  colors: {
    text: '#656565',
    primary: '#fe7e17',
    secondary: '#212121',
    background: '#fff',
    white: '#fff',
    grey0: '#d2d2d2',
    grey50: '#d9d9d9',
    grey100: '#eaeaea',
    grey150: '#efefef',
    grey200: '#b6b6b6',
    grey300: '#ccc',
    grey400: '#686868',
    grey500: '#808080',
    grey600: '#898989',
    grey700: '#999',
    muted: '#f6f6f6',
    black600: '#212121',
    black700: '#323232',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#0cf',
      }
    }
  },
  fonts: {
    body: 'Lato,Roboto, "Helvetica Neue", sans-serif',
    heading: 'Montserrat',
    author: 'Nothing You Could Do',
  },
  breakpoints: ['576px', '768px', '992px', '1280px', '160rem'],
  space: [0, 5, 8, 16, 18, 20, 25, 30, 64, 128, 256, 512],
  fontSizes: [12, 15, 16, 18, 20, 24, 28, 32, 48, 64, 96],
  fontWeights: {
    body: 300,
    normal: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.75,
    heading: 1.125,
  },
  text: {
    heading: {
      fontFamily: 'heading',
      color: 'black700',
      fontWeight: 'normal',
    },
    heading1: {
      variant: 'text.heading',
      fontSize: 8,
      fontFamily: 'body',
      fontWeight: 'body',
      m: 0,
    },
    heading4: {
      variant: 'text.heading',
      fontSize: 3,
      mt: 0,
      mb: 5,
    },
    heading5: {
      variant: 'text.heading',
      fontSize: 1,
      mt: 0,
      mb: 5,
    },
    paragraph: {
      mt: 0,
      mb: 5
    },
    list: {
      pl: 5,
      mt: 0,
      mb: 6,
    },
    listItem: {
      mb: 1,
      listStyleType: 'circle'
    },
    link: {
      bg: 'transparent',
      borderWidth: '1px',
      borderBottomStyle: 'solid',
      borderColor: 'primary',
      transition: '0.2s linear',
      textDecoration: 'none',
      color: 'inherit',
      '&:hover': {
        bg: 'rgba(0, 0, 0, 0.05)',
        borderColor: 'black700',
      }
    }
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontSize: 3
    },
  }
}
