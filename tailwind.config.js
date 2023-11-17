const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        screens: {
            sm: '550px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1440px',
        },
    },
    plugins: [require('tailwind-scrollbar')],
})
