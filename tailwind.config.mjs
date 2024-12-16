import animations from "@midudev/tailwind-animations"

/**@type {import("tailwindcss").Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme:	{
		extend: {
			colors:{
				"primary": "#111",
				"secondary": "#ddd",
				"tertiary": "#1c790a",
				"quaternary": "#136304",
			}
		},
	},
	plugins: [animations],
}