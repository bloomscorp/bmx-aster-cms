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
					100: "#EDE8F5",
					200: "#ADBBDA",
					300: "#8697C4",
					400: "#7091E6",
					500: "#3D52A0",
				},
			},
		},
	},
	plugins: [],
}
