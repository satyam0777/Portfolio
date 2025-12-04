/** @type {import('tailwindcss').Config} */


export default  {
  darkMode: 'selector',
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        signature: ["Dancing Script", "cursive"],
      },
      rotate: {
        '-4': '-4deg',
        '4': '4deg',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
         pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0px rgba(0,0,0,0)' },
          '50%': { boxShadow: '0 0 20px rgba(59,130,246,0.6)' },
        },
         floatAround: {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(5px, -5px)' },
          '50%': { transform: 'translate(0, -10px)' },
          '75%': { transform: 'translate(-5px, -5px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
         techWaves: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
         codeLines: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 100%' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
         pulseGlow: 'pulseGlow 3s infinite',
          floatAround: 'floatAround 5s ease-in-out infinite',
           techWaves: 'techWaves 10s ease infinite',
            codeScroll: 'codeLines 10s linear infinite',
      },
       backgroundImage: {
        tech: "linear-gradient(-45deg, #0f172a, #1e293b, #334155, #0f172a)",
         code: "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
      },
    },
  },
  plugins: [],
};

