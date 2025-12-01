import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-deep-wine': '#452829',
        'neutral-gray': '#57595B',
        'soft-accent-beige': '#E8D1C5',
        'light-background-cream': '#F3E8DF',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out',
        'slide-in-up': 'slide-in-up 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}
export default config
