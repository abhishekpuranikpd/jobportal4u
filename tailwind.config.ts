import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#dec4fc",
          secondary: "#0f8c88",
          accent: "#417aa0",
          neutral: "#161c22",
          "base-100": "#dec4fc",
          info: "#95d1e9",
          success: "#16834b",
          warning: "#a45904",
          error: "#f62858",
        },
      },
    ],
  },
  
  plugins:  [require("daisyui")],
}
export default config
