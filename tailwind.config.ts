import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			screens: {
				sm: { max: '640px' }, // Max-width: 640px
				md: { max: '768px' }, // Max-width: 768px
				lg: { max: '1024px' }, // Max-width: 1024px
				xl: { max: '1280px' }, // Max-width: 1280px
				'2xl': { max: '1536px' } // Max-width: 1536px
			},
			colors: {
				main: 'rgba(var(--bg-main))',
				'color-1': 'rgba(var(--color-1))',
				'color-2': 'rgba(var(--color-2))',
				'color-3': 'rgba(var(--color-3))',
				'color-4': 'rgba(var(--color-4))'
			},
			fontFamily: {
				sora: ['Sora', 'sans-serif'],
				orbitron: 'Orbitron',
				unbounded: 'Unbounded',
				poppins: ['Poppins', 'sans-serif'],
				nunito: ['Nunito', 'sans-serif'],
				varela: ['Varela Round', 'sans-serif'],
				'nova-round': 'Nova Round'
			},
			animation: {
				marquee: 'marquee 25s linear infinite',
				marquee2: 'marquee2 25s linear infinite'
			},
			keyframes: {
				marquee: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' }
				},
				marquee2: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0%)' }
				}
			}
		}
	},
	daisyui: {
		base: false
	},
	plugins: [daisyui, typography, forms, containerQueries, aspectRatio]
} satisfies Config;
