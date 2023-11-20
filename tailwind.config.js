const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        screens: {
            sm: { min: '350px', max: '540px' },
            // => @media (min-width: 640px and max-width: 767px) { ... }

            md: { min: '540px', max: '768px' },
            // => @media (min-width: 768px and max-width: 1023px) { ... }

            lg: { min: '769px', max: '1279px' },
            // => @media (min-width: 1024px and max-width: 1279px) { ... }

            xl: { min: '1280px', max: '1535px' },
            // => @media (min-width: 1280px and max-width: 1535px) { ... }
        },
    },
    plugins: [require('tailwind-scrollbar')],
})
