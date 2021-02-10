module.exports = {
    purge: {
        enabled: false,
        content: [
          'src/**.html',
        ]
    },
    darkMode: false,
    theme: {
        extend: {
            backgroundColor: theme => ({

                ...theme('colors'),

                'first': '#F6EED9',

                'second': '#E2E0E1',

                'third': '#DBCBF0',

                'forth': '#E9F7D6',

                'fifth': '#024659',
                'white':'#FFFFFF',
                'hightlight': '#E1007A',

                'blue-corp': '#0199C2',
                'green-corp':'#EDEFEE',
                'dark-green': '#0C3E49',
            }),

            textColor: theme => theme('colors'),

            textColor: {
                

                'pink-corp': '#E1007A',

                'blue-corp': '#0199C2',

                'danger': '#e3342f',

                'dark-green': '#0C3E49',
                

            },
            fontFamily: {

                'big': ['Oswald', 'sans-serif'],

                'normal': ['Montserrat', 'sans-serif'],

            },
            borderColor: theme => ({

                ...theme('colors'),

                'blue-corp': '#0199C2',

                'pink-corp': '#E1007A',

                'dark-green': '#0C3E49',
            }),
            spacing: {
                '35':'8.625',
                '38':'9.5rem',
                '77':'18.5rem',
                '85':'22rem',
                '97':'26.125rem',
                '98':'27rem',
                '100': '30rem',
                '120':'35rem',
                '65':'16.43rem',


              },
              fontSize: {

                '2xxl': '1.70rem',
                '8xl': '5.25rem'
              },
              lineHeight: {
                '4.5':'1.12rem',
                '14': '5rem',
                '16': '5.5rem',
               },
               margin: {

                    '18':'4.5rem',
               }
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}