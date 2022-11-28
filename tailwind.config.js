/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./spotify/**/*.html"],
    theme: {
        extend: {
            colors: {
                'white-alpha': {
                    900: 'rgba(255,255,255, .9)',
                    800: 'rgba(255,255,255, .8)',
                    700: 'rgba(255,255,255, .7)',
                    600: 'rgba(255,255,255, .6)',
                    400: 'rgba(255,255,255, .4)',
                    200: 'rgba(255,255,255, .2)',
                    100: 'rgba(255,255,255, .1)'
                },
            }
        },
    },
    plugins: [
        function ({addUtilities}) {
            const newUtilities = {
                '.y-center': {
                    top: '50%',
                    transform: 'translateY(-50%)'
                }
            }
            addUtilities(newUtilities)
        }
    ],
}
