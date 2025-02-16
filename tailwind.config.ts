import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px"
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem"
      }
    },
    extend: {
      fontFamily: {
        serif: ['Palatino', '"Times New Roman"'],
        sans: ['var(--font-sans)'],
        sono: ['var(--font-sono)']
      },
      animation: {
        'arm-pull': 'arm_pull 3s linear infinite',

        'slot-button-press': 'slot_button_press 1s ease-in infinite',

        'delayed-icon-flip-fs': 'delayed_icon_flip_fs 4s ease-in',
        'delayed-icon-flip-bs': 'delayed_icon_flip_bs 4s ease-out',

        'scroll-down-1': 'reel_items_scroll_1 3s linear',
        'scroll-down-2': 'reel_items_scroll_2 3s linear',
        'scroll-down-3': 'reel_items_scroll_3 3s linear',

        'fade-in-t-2000': 'fade_in_t 2s ease-in-out',
        'fade-in-t-3000': 'fade_in_t 3s ease-in-out',
        'fade-in-t-1500': 'fade_in_t 1.5s ease-in-out',
        'fade-in-t-1000': 'fade_in_t 1s ease-in-out',
        'fade-in-t-500': 'fade_in_t 0.5s ease-in-out',
        'fade-in-l-2000': 'fade_in_l 2s ease-in-out',
        'fade-in-l-3000': 'fade_in_l 3s ease-in-out',
        'fade-in-l-1500': 'fade_in_l 1.5s ease-in-out',
        'fade-in-l-1000': 'fade_in_l 1s ease-in-out',
        'fade-in-l-500': 'fade_in_l 0.5s ease-in-out',
        'fade-in-b-2000': 'fade_in_b 2s ease-in-out',
        'fade-in-b-3000': 'fade_in_b 3s ease-in-out',
        'fade-in-b-1500': 'fade_in_b 1.5s ease-in-out',
        'fade-in-b-1000': 'fade_in_b 1s ease-in-out',
        'fade-in-b-500': 'fade_in_b 0.5s ease-in-out',
        'fade-in-r-2000': 'fade_in_r 2s ease-in-out',
        'fade-in-r-3000': 'fade_in_r 3s ease-in-out',
        'fade-in-r-1500': 'fade_in_r 1.5s ease-in-out',
        'fade-in-r-1000': 'fade_in_r 1s ease-in-out',
        'fade-in-r-500': 'fade_in_r 0.5s ease-in-out',
        'fade-in-warp': 'fade_in_warp 5s ease-in-out',

        'rainbow-spin-reveal': 'rainbow_spin_reveal 6s ease-in-out',

        'vertical-auto-carousel': 'vertical_auto_carousel 30s linear infinite',
        'horizontal-auto-carousel': 'horizontal_auto_carousel 20s linear infinite'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'taupe-gray': '#8e838c',
        'ash-gray': '#bec3bc',
        'reseda-green': '#6e826c',
        'pistachio': '#9ec26c',
        'olivine': '#bed38c',
      },
      keyframes: {
        arm_pull: {
          '0%': {transform: 'rotateX(0)'},
          '50%': {transform: 'rotateX(90deg)'},
          '100%': {transform: 'rotateX(180deg)'},
        }, 

        slot_button_press:{
          '10%': {
            filter: 'drop-shadow(0 0.33rem 1rem red)',
            height: '1.0rem',
            transform: 'translateY(0.48rem)'
          },
          '60%': {
            filter: 'drop-shadow(0 0rem 0.5rem crimson)',
            height: '1.0rem',
            transform: 'translateY(0.48rem)'
          }
        },

        delayed_icon_flip_fs: {
          '70%': {
            transform: 'rotateY(0deg) rotateZ(0deg)'
          },
          '80%': {
            transform: 'rotateY(90deg) rotateZ(90deg)'
          },
          '100%': {
            transform: 'rotateY(180deg) rotateZ(180deg)'
          }
        },
        delayed_icon_flip_bs: {
          '70%': {
            transform: 'rotateY(180deg) rotateZ(180deg)'
          },
          '80%': {
            transform: 'rotateY(270deg) rotateZ(90deg)'
          },
          '100%': {
            transform: 'rotateY(360deg) rotateZ(0deg)'
          }
        },

        reel_items_scroll_1: {
          '0%': {transform: 'translateY(-50%)', 'animation-timing-function': 'ease ease-in'},
          '33%': {transform: 'translateY(-25%)'},
          '66%': {transform: 'translateY(0%)'},
          '100%': {transform: 'translateY(0%)'}
        },
        reel_items_scroll_2: {
          '0%': {transform: 'translateY(-50%)', 'animation-timing-function': 'ease ease-in'},
          '33%': {transform: 'translateY(-25%)'},
          '80%': {transform: 'translateY(0%)'},
          '100%': {transform: 'translateY(0%)'}
        },
        reel_items_scroll_3: {
          '0%': {transform: 'translateY(-50%)', 'animation-timing-function': 'ease ease-in'},
          '33%': {transform: 'translateY(-25%)'},
          '80%': {transform: 'translateY(-10%)'},
          '100%': {transform: 'translateY(0%)'}
        },

        vertical_auto_carousel: {
          '0%': {transform: 'translateY(0%)'},
          '100%': {transform: 'translateY(-50%)'}
        },
        horizontal_auto_carousel: {
          '0%': {transform: 'translateX(-25%)'},
          '100%': {transform: 'translateX(25%)'}
        },

        fade_in_t: {
          '0%': { opacity: '0', transform: 'translateY(-20%)'},
          '50%': { opacity: '0', transform: 'translateY(-20%)'},
          '75%': {opacity: '80', transform: 'translateY(5%)'},
          '100%': { opacity: '100'}
        },
        fade_in_l: {
          '0%': { opacity: '0', transform: 'translateX(-20%)'},
          '50%': { opacity: '0', transform: 'translateX(-20%)'},
          '75%': {opacity: '80', transform: 'translateX(5%)'},
          '100%': { opacity: '100'}
        },
        fade_in_b: {
          '0%': { opacity: '0', transform: 'translateY(20%)'},
          '50%': { opacity: '0', transform: 'translateY(20%)'},
          '75%': {opacity: '80', transform: 'translateY(-5%)'},
          '100%': { opacity: '100'}
        },
        fade_in_r: {
          '0%': { opacity: '0', transform: 'translateX(20%)'},
          '50%': { opacity: '0', transform: 'translateX(20%)'},
          '75%': {opacity: '80', transform: 'translateX(-5%)'},
          '100%': { opacity: '100'},
        },
        fade_in_warp: {
          '0%': { opacity: '0'},
          '80%': {opacity: '0', transform: 'rotateY(20deg)'},
          '100%': { opacity: '100'},
        },
        rainbow_spin_reveal: {
          '0%': {opacity: '0', transform: 'rotateZ(-180deg)'},
          '40%': {opacity: '0', transform: 'rotateZ(-180deg)'},
          '100%': {opacity: '100', transform: 'rotateZ(-0deg)'},
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
