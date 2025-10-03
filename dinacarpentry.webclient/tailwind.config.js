module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: '#2C80AF',
        secondary: '#379BD7',
        'blue-300': '#65BFF5',
        'light-blue': '#2C80AF1A',
        'dark-blue': '#134158',
        background: '#F2F2F2',
        'gray-200': '#C4C4C44D',
        'gray-400': '#F2F2F2B2',
        'gray-700': '#2222224D',
        'gray-750': '#22222280',
        'gray-800': '#2222229c',
        'gray-900': 'rgba(34, 34, 34, 0.7)',
        'orange-500': '#DA9B3E',
        'red-500': '#BB3636',
        'green-500': '#70BA49',
        white: '#fff',
        footer: '#134158',
        'icon-color': '#a1a1aa',
        'border-gray': '#8884846c'
      },
      borderRadius: {
        card: '0.9375rem',
      },
      fontSize: {
        title: '1.25rem',
      },
      fontWeight: {
        title: '400',
      },
      boxShadow: {
        'custom': '0px 0px .8rem #0000002a'
      },
      gridTemplateColumns: {
        'custom-1': 'repeat(1, 1fr)',
        'custom-2': 'repeat(2, 1fr)',
        'custom-3': 'repeat(3, 1fr)',
        'custom-4': 'repeat(4, 1fr)',
      },
      width: {
        'customLess3rem': 'calc(100% - 3rem)',
      },
      gridColumn: {
        'span-1-2': 'span 1 / span 2',
      },
      maxWidth: {
        'custom-size': '226px',
      },
      minWidth: {
        auto: 'auto',
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries')
  ],
}
