import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper:   '#f5f2ec',
        ink:     '#0d0d0d',
        mid:     '#6b6560',
        rule:    '#dedad3',
        accent:  '#1a4d3e',
        'accent-lt': '#2e7d5e',
        mono:    '#3a3530',
      },
      fontFamily: {
        serif:  ['Playfair Display', 'Georgia', 'serif'],
        sans:   ['DM Sans', 'system-ui', 'sans-serif'],
        mono:   ['DM Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
