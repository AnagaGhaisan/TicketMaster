import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                lg: "50px",
                xl: "100px",
            },
        },
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                poppins: "Poppins, sans-serif",
            },
            colors: {
                "dark-indigo": "#001219",
                primary: "#005F73",
                secondary: "#099396",
                "butter-yellow": "#94D2BD",
                "lavender-pink": "#AE2012",
                "persian-pink": "#9B2227",
                "iron-grey": "#E9D7A5",
                "pastel-purple": "#EE9B00",
                "bluish-purple": "#CA6702",
                "smoke-purple": "#BB3F03"
            },
        },
    },

    plugins: [forms, typography],
};
