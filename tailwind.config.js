/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./**/*.html"],
	theme: {
		container: {
			center: true,
		},
		extend: {
			fontFamily: {
				'serif': ['Optima', 'Candara', '"Noto Sans"', 'source-sans-pro', 'sans-serif']
			}
		}
	},
	variants: {},
	plugins: [require("@tailwindcss/typography")],
};
