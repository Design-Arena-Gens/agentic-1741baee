import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial': 'radial-gradient(ellipse at top left, var(--tw-gradient-stops))',
        'conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        glass: 'rgba(255,255,255,0.08)'
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'
      },
      borderColor: {
        glass: 'rgba(255,255,255,0.18)'
      }
    },
  },
  plugins: [],
}
export default config
