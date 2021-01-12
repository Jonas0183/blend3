module.exports = {
    purge: [
        './dist/index.html'
    ],
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

                'hightlight': '#E1007A',

                'blue-corp': '#0199C2',
                'green-corp':'EDEFEE'
            }),

            textColor: theme => theme('colors'),

            textColor: {

                'pink-corp': '#E1007A',

                'blue-corp': '#0199C2',

                'danger': '#e3342f',

            },
            fontFamily: {

                'big': ['Oswald', 'sans-serif'],

                'normal': ['Montserrat', 'sans-serif'],

            },
            borderColor: theme => ({

                ...theme('colors'),

                'blue-corp': '#0199C2',

                'pink-corp': '#E1007A',

                'danger': '#e3342f',
            }),
            spacing: {
                '85':'22rem',
                '100': '30rem',
       
              },
              fontSize: {

                '2xxl': '1.70rem',
              }
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}