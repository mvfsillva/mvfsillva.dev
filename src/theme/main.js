const theme = {}

theme.radius = Object.assign('3px', {
  tiny: '2px',
  medium: '4px',
  large: '6px',
  xlarge: '8px',
})

theme.spacing = Object.assign('8px', {
  small: '4px',
  medium: '16px',
  large: '24px',
  xLarge: '32px',
  xxLarge: '40px',
  xxxLarge: '48px',
  huge: '56px',
  xHuge: '64px',
  xxHuge: '72px',
  xxxHuge: '80px',
})

theme.zindex = {
  dropdown: 100,
  sticky: 200,
  fixed: 300,
  overlay: 400,
  modal: 500,
  popover: 600,
  tooltip: 700,
}

theme.shadow = {
  tiny: '0 1px 2px 0 rgba(0, 0, 0, 0.08);',
  soft: '0 0 16px 0 rgba(0, 0, 0, 0.08);',
  small: '0 2px 4px 0 rgba(0, 0, 0, 0.15);',
  medium: '0 4px 10px 0 rgba(0, 0, 0, 0.15);',
  large: '0 6px 16px 2px rgba(0, 0, 0, 0.08);',
}

theme.responsive = {
  smallPhone: 'screen and (min-width: 320px) and (max-width: 480px)',
  smallTablet: 'screen and (min-width: 481px) and (max-width: 767px)',
  smallDesktop: 'screen and (min-width: 1025px) and (max-width: 1280px)',
  phone: 'screen and (max-width: 580px)',
  tablet: 'screen and (min-width: 768px) and (max-width: 1024px)',
  desktop: 'screen and (min-width: 1281px)',
}

theme.palette = {
  white: '#ffffff',
  black: '#000000',

  gray: Object.assign('#7e7e7e', {
    light: '#bfbfbf',
    ultraLight: '#f7f7f7',

    // Scale
    '050': '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  }),
}

theme.typography = {
  intro: {
    fontSize: '72px',
    fontWeight: '700',
    lineHeight: '60px',
    letterSpacing: '5px',
  },
  title: {
    fontSize: '42px',
    fontWeight: '400',
    lineHeight: '50px',
    letterSpacing: '5px',
  },
  subtitle: {
    fontSize: '36px',
    fontWeight: '300',
    lineHeight: '40px',
    letterSpacing: '4px',
  },
  paragraph: {
    fontSize: '18px',
    fontWeight: '300',
    lineHeight: '32px',
    letterSpacing: '2px',
  },
  link: {
    fontSize: '14px',
    fontWeight: '400',
    textTransform: 'uppercase',
    lineHeight: '30px',
    letterSpacing: '5px'
  },
}

export default theme
