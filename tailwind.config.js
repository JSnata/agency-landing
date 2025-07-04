module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      colors: {
        dark: '#0C0C0C',
        neutralGray: '#909090',
        lightGreen: '#96EF76',
        primaryGreen: '#2F872D',
        neutralGreen: '#3FA11B'
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
        'content-container': '83.93rem',
        'content-container-half': '41.9rem'
      },
    },
  },
  plugins: [],
}
