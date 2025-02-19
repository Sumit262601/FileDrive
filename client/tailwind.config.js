/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
    	extend: {
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)',
    			'2xl': 'calc(var(--radius) + 4px)',
    			xl: 'calc(var(--radius) + 2px)'
    		},
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			},
    			sidebar: {
    				DEFAULT: 'hsl(var(--sidebar-background))',
    				foreground: 'hsl(var(--sidebar-foreground))',
    				primary: 'hsl(var(--sidebar-primary))',
    				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
    				accent: 'hsl(var(--sidebar-accent))',
    				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
    				border: 'hsl(var(--sidebar-border))',
    				ring: 'hsl(var(--sidebar-ring))'
    			},
    			brand: {
    				DEFAULT: 'hsl(var(--brand))',
    				foreground: 'hsl(var(--brand-foreground))'
    			}
    		},
    		fontFamily: {
    			code: [
    				'var(--font-mono)'
    			],
    			regular: [
    				'var(--font-body)'
    			]
    		},
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			},
    			marquee: {
    				from: {
    					transform: 'translateX(0)'
    				},
    				to: {
    					transform: 'translateX(calc(-100% - var(--gap)))'
    				}
    			},
    			appear: {
    				'0%': {
    					opacity: '0',
    					transform: 'translateY(1rem)',
    					filter: 'blur(.5rem)'
    				},
    				'50%': {
    					filter: 'blur(0)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translateY(0)',
    					filter: 'blur(0)'
    				}
    			},
    			'appear-zoom': {
    				'0%': {
    					opacity: '0',
    					transform: 'scale(.5)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'scale(1)'
    				}
    			},
    			'pulse-hover': {
    				'0%': {
    					opacity: '1',
    					transform: 'translateY(0)'
    				},
    				'50%': {
    					opacity: '0.5',
    					transform: 'translateY(-1rem)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translateY(0)'
    				}
    			},
    			hover: {
    				'0%': {
    					transform: 'translateY(0) translateX(0)'
    				},
    				'50%': {
    					transform: 'translateY(-1rem) translateX(1rem)'
    				},
    				'100%': {
    					transform: 'translateY(0) translateX(0)'
    				}
    			},
    			'hover-reverse': {
    				'0%': {
    					transform: 'translateY(0) translateX(0)'
    				},
    				'50%': {
    					transform: 'translateY(1rem) translateX(1rem)'
    				},
    				'100%': {
    					transform: 'translateY(0) translateX(0)'
    				}
    			},
    			'pulse-fade': {
    				'0%': {
    					opacity: '1'
    				},
    				'50%': {
    					opacity: '0.3'
    				},
    				'100%': {
    					opacity: '1'
    				}
    			},
    			shine: {
    				'0%': {
    					'background-position': '0% 0%'
    				},
    				'50%': {
    					'background-position': '100% 100%'
    				},
    				to: {
    					'background-position': '0% 0%'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out',
    			appear: 'appear 0.6s forwards ease-out',
    			'appear-zoom': 'appear-zoom 0.6s forwards ease-out',
    			'pulse-hover': 'pulse-hover 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    			shine: 'shine var(--duration) infinite linear'
    		},
    		spacing: {
    			container: '1280px'
    		},
    		boxShadow: {
    			md: '0 4px 6px -1px var(--shadow), 0 2px 4px -2px var(--shadow)',
    			xl: '0 20px 25px -5px var(--shadow), 0 8px 10px -6px var(--shadow)',
    			'2xl': '0 25px 50px -12px var(--shadow)',
    			'glow-sm': '0 0 16px 0 hsla(var(--foreground) / 0.08) inset',
    			'glow-md': '0 0 32px 0 hsla(var(--foreground) / 0.08) inset',
    			'glow-lg': '0 0 64px 0 hsla(var(--foreground) / 0.06) inset',
    			mockup: '-12px 16px 48px var(--shadow-strong)'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
}
