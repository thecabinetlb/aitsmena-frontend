/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ['Aktifo'],
      },
      colors: {
        bg: 'black',
        bg2: '#32527B', //blue
        accent1: 'white',
        accent2: '#F2F2F2',//greyish white
      },
      backgroundOpacity: {
        '10': '0.1',
      },
      backgroundImage: {
        'noise':'url(/images/noise/noise.svg)',
        'blue-noise':'url(/images/noise/blue-noise.svg)',
        'footer-noise':'url(/images/noise/footer-noise.svg)',
        'extended-noise':'url(/images/noise/extended-noise.svg)',
        'colors':'url(/images/insidepages/elements/allelements.webp)',
        'mobilecolors':'url(/images/insidepages/elements/allelementsmobile.webp)',
        'noise-small':'url(/images/noise/noise-small.svg)',
      },
      aspectRatio: {
        '2.01/1': '2.01 / 1',
        '0.88/1': '0.88 / 1',
        '1.72/1': '1.72 / 1'
      },
      dropShadow: {
        'lg': '0 10px 8px rgba(255,255,255)'
      }
  }
},
  plugins: [],
}

