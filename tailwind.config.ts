import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy-dark': '#112d4e',
        'navy-medium': '#1a4578',
        'navy-darker': '#0c366a',
        'navy-darkest': '#081524',
        'grey-medium': '#aaabab',
        'grey-light': '#c4c4c4',
        'grey-cool': '#c1c6c6',
        'white': '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
