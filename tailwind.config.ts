import fluid, { extract, fontSize, screens } from 'fluid-tailwind'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: {
    files: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    extract,
  },
  theme: {
    extend: {
      screens: {
        ...screens,
        '2xsm': '20rem',
        xsm: '23.4375rem',
        bsm: '26.5625rem',
        laptop: '90rem',
      },
      fontSize,
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        accent: 'var(--accent)',
        'accent-foreground': 'var(--accent-foreground)',
      },
      fontFamily: {
        montserrat: 'var(--montserrat)',
      },
    },
  },
  plugins: [fluid],
}
export default config
