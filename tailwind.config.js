module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#0C0C0C',
        gray: '#909090'
      },
      fontSize: {
        'text-bage': '0.8125rem',
        'text-heading': '3.38rem'
      },
      screens: {
        'md-lg': '900px',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          md: '768px',
          lg: '1280px',
          xl: '1440px',
        },
      },
      maxWidth: {
        'container': '86rem',
      },
    },
  },
  plugins: [],
}
