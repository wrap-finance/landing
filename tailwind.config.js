/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        1.25: '0.3125rem',
        3.75: '0.9375rem',
        5.5: '1.375rem',
        7.5: '1.875rem',
        10.5: '2.625rem',
        12.5: '3.125rem',
      },
      maxWidth: {
        container: '1360px',
      },
      backdropBlur: {
        '5xl': '80px',
      },
    },
    backgroundImage: {
      'join-community':
        'linear-gradient(180deg, rgba(10, 16, 32, 0) 0%, rgba(19, 57, 88, 0.2) 100%)',
      'header-image': 'url("/images/Group 13 (2).svg")',
      'primary-linear':
        'linear-gradient(356.31deg, rgba(56, 43, 222, 0.72) -5.8%, #39BCF4 16.55%, rgba(57, 188, 244, 0) 31.58%)',
      'white-linear':
        'linear-gradient(354.76deg, rgba(255, 255, 255, 0) 8.7%, rgba(255, 255, 255, 0) 55.68%)',
      'timeline-linear':
        'rgba(0, 0 ,0, 0), linear-gradient(180deg, rgba(10, 16, 32, 0.8) 0%, rgba(19, 57, 88, 0.2) 100%)',
      'join-circle': 'url("/images/Group 14.png")',
      'join-box': 'linear-gradient(#0A1020 0, transparent 160px), url("/images/sadfsd.svg")',
      'vertical-line':
        'linear-gradient(180deg, #0a1020 0%, rgba(19, 57, 88, 0.2) 100%), linear-gradient(180deg, #fefdeb 0%, #0a1020 100%)',
      'horizontal-line':
        'linear-gradient(90deg, #0a1020 0%, rgba(19, 57, 88, 0.2) 100%), linear-gradient(90deg, #fefdeb 0%, #0a1020 100%)',
    },
    boxShadow: {
      timeline: '0px 0px 40px 0px #FEFDEB33',
    },

    colors: {
      dark: '#0A1020',
      graydark: '#20242B',
      black: '#000000',
      white: '#FFFFFF',
      dodgerBlue: '#1DA1F2',
      navy: '#101F86',
      lateBlue: '#5865F2',
      warm: '#FEFDEB',
      skyblue: '#B7D7E0',
      transparent: 'transparent',
    },
    fontSize: {
      inherit: 'inherit',
      sm: [
        '14px',
        {
          lineHeight: '22px',
          letterSpacing: '0.01em',
        },
      ],
      base: [
        '16px',
        {
          lineHeight: '25px',
          letterSpacing: '0.015em',
        },
      ],
      lg: [
        '18px',
        {
          lineHeight: '28px',
          letterSpacing: '0.02em',
        },
      ],
      xl: [
        '20px',
        {
          lineHeight: '31px',
          letterSpacing: '0.02em',
        },
      ],
      '2xl': [
        '24px',
        {
          lineHeight: '37px',
          letterSpacing: '0.02em',
        },
      ],
      '3xl': [
        '31px',
        {
          lineHeight: '30px',
          letterSpacing: '-0.011em',
        },
      ],
      '4xl': [
        '32px',
        {
          lineHeight: '50px',
          letterSpacing: '0.02em',
        },
      ],
      '5xl': [
        '40px',
        {
          lineHeight: '62px',
          letterSpacing: '0.02em',
        },
      ],
      '6xl': [
        '48px',
        {
          lineHeight: '74px',
          letterSpacing: '0.02em',
        },
      ],
    },
    fontFamily: {
      primary: ['rationell', 'sans-serif'],
    },
    fontWeight: {
      extraLight: 200,
      light: 300,
      regular: 400,
      medium: 500,
      bold: 600,
      extraBold: 700
    },
  },
  plugins: [],
};