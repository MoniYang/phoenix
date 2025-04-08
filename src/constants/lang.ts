import FlagEN from '../assets/img/flag/Lang_EN.svg'
import FlagJP from '../assets/img/flag/Lang_JP.svg'

export enum LANG {
    EN = 'en',
    JP = 'jp',
    KO = 'ko',
    ES = 'es',
}

export const LANG_ITEMS = [
    {
        value: LANG.EN,
        img: FlagEN,
    },
    {
        value: LANG.JP,
        img: FlagJP,
    }
]
