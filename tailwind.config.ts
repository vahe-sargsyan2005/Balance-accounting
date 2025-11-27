import type { Config } from 'tailwindcss'
import {daintree, madang, mirage} from './app/types/colors'

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                primary: madang,
                secondary: daintree,
                mirage
            },
            fontFamily: {
                dm: ['"DM Sans"', 'sans-serif']
            }
        }
    }
}
