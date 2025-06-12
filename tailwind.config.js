/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [typography],
}
