/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./projects/ngx-aster-cms/src/lib/**/*.{html,ts}",
		"./projects/ngx-aster-cms/assets/dist/*.{html,ts,scss}",
		"./src/**/*.{html,ts}",
	],
	theme: {
		extend: {},
	},
	plugins: [],
}

