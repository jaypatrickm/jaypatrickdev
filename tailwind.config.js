module.exports = {
   content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
   ],
   theme: {
      extend: {
         colors: {
            'orange-100': '#ff931e',
            'orange-200': '#e28413',
            'orange-300': '#af6615',
            light: '#ededec',
            dark: '#38424d',
            'dark-slate': '#515e61',
            'blue-100': '#b1d8f5',
            'blue-200': '#688eb4',
            'dark-blue': '#161b28',
            'light-brown': '#918477',
         },
         fontFamily: {
            'source-serif-pro-bold': ['SourceSerifPro-Bold', 'serif'],
            'source-serif-pro-bold-italic': [
               'SourceSerifPro-BoldItalic',
               'serif',
            ],
            'source-serif-pro-regular': ['SourceSerifPro-Regular', 'serif'],
            'source-serif-pro-italic': ['SourceSerifPro-Italic', 'serif'],
            'source-serif-pro-semi-bold': ['SourceSerifPro-SemiBold', 'serif'],
            'source-serif-pro-semi-bold-italic': [
               'SourceSerifPro-SemiBoldItalic',
               'serif',
            ],
         },
         backgroundImage: {
            'main-gradient':
               'url("/assets/jaypatrickdev-gradient-bg-desktop.jpg")',
            'main-gradient-m':
               'url("/assets/jaypatrickdev-gradient-bg-mobile.jpg")',
         },
      },
   },
   plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
   ],
};
