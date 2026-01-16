import { defineEventHandler, getQuery } from 'h3'
import type { ITeamMember } from '~/types/team'

export default defineEventHandler((event) => {
    const query = getQuery(event)
    const lang = (query.lang as string) || 'en'

    // База данных сотрудников
    const teamData = [
        {
            id: 1,
            name: 'Edo dzya',
            image: 'https://scontent.fevn4-2.fna.fbcdn.net/v/t39.30808-1/450544352_1685028902327227_6125264113275811811_n.jpg?stp=c0.200.1200.1200a_dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=e99d92&_nc_ohc=lcmw41a9j3MQ7kNvwE3TJC2&_nc_oc=Adnop7uP_F8FbvR9I0FWvH_1uPqnlXZVzrah0xTuyu_CiBXXU-XvKX3kvD-uKgE_XMI&_nc_zt=24&_nc_ht=scontent.fevn4-2.fna&_nc_gid=E5qJIdrw3HxAieU1JmuAHw&oh=00_Afq_7Oc_pEVD1BT3g_dt5yqOgNug-Z9yKuLiGkFGqxkZOQ&oe=69707A4F',
            facebookUrl: 'https://facebook.com',
            positions: {
                en: 'Vice President',
                ru: 'Вице-президент галактики',
                hy: 'Вице-президент галактики'
            }
        },
        {
            id: 2,
            name: 'Horqur Sargsyan',
            image: 'https://scontent.fevn4-3.fna.fbcdn.net/v/t39.30808-1/512760764_2825753920945385_235510841194351329_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=1d2534&_nc_ohc=WBkURxbquYoQ7kNvwH2Cc8v&_nc_oc=Adln5XHY0AWvu63TLhIaBBMnnJqO_JCUHHflJTdChVWDLXM6pcEUTbfr_VZ7prRhuC0&_nc_zt=24&_nc_ht=scontent.fevn4-3.fna&_nc_gid=xM_58ticbRsH7oNtb8fbgw&oh=00_Afrn6t7RpaK_Ad3l3sfYGeviIWVa2f97n986yP4UvlML7g&oe=6970846C',
            facebookUrl: 'https://facebook.com',
            positions: {
                en: 'Senior Advisor Associate',
                ru: 'Старший консультант',
                hy: 'Հաշվետար'
            }
        },
        {
            id: 3,
            name: 'Daniel Kim',
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400',
            facebookUrl: 'https://facebook.com',
            positions: {
                en: 'Vice President',
                ru: 'Вице-президент',
                hy: 'Փոխնախագահ'
            }
        },
        {
            id: 4,
            name: 'Emily Tran',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400',
            facebookUrl: 'https://facebook.com',
            positions: {
                en: 'Managing Director',
                ru: 'Управляющий директор',
                hy: 'Գործադիր տնօրեն'
            }
        }
    ]

    const response: ITeamMember[] = teamData.map(member => ({
        id: member.id,
        name: member.name,
        image: member.image,
        facebookUrl: member.facebookUrl,
        position: member.positions[lang] || member.positions['en']
    }))

    return response
})