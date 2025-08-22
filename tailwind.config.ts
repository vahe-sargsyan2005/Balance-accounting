import type { Config } from 'tailwindcss'
import { apache, woodsmoke, zodiac } from './app/types/colors'

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                primary: apache,
                apache,
                woodsmoke,
                zodiac,
            }
        }
    }
}
