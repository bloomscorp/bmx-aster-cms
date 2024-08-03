/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./projects/ngx-aster-cms/src/lib/**/*.{html,ts}",
		"./projects/ngx-aster-cms/assets/dist/*.{html,ts,scss}",
		"./src/**/*.{html,ts}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					100: "#F3F4F6",
					200: "#D1D5DB",
					300: "#3F83F8",
					400: "#1C64F2",
					500: "#233876",
				},
			},
		},
	},
	plugins: [],
}
