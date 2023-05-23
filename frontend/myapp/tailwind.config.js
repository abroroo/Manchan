module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
        fontFamily: {
            'monts': ['Montserrat', 'sans-serif'],
            'dm': ['DM Sans', 'sans-serif'],
            'outfit': ['Outfit', 'sans-serif'],
            'kalam': ['Kalam', 'cursive'],
        }
    },
    variants: {},
    plugins: [
        require('flowbite/plugin')
    ],
    content: [
        "./node_modules/flowbite-react/**/*.js",
        "./pages/**/*.{ts,tsx}",
        "./public/**/*.html",
        "./node_modules/tailwind-datepicker-react/dist/**/*.js",
    ],
};