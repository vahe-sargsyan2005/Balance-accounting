import { defineEventHandler, getQuery } from 'h3'
import type { ICareer } from '~/types/career'

export default defineEventHandler((event) => {
    const query = getQuery(event)
    const lang = (query.lang as string) || 'en'

    const careers = [
        {
            id: 1,
            type: 'Full-Time',
            data: {
                en: { title: 'Financial Advisor', location: 'Yerevan, Armenia', department: 'Advisory' },
                ru: { title: 'Финансовый консультант', location: 'Ереван, Армения', department: 'Консалтинг' },
                hy: { title: 'Ֆինանսական խորհրդատու', location: 'Երևան, Հայաստան', department: 'Խորհրդատվություն' }
            }
        },
        {
            id: 2,
            type: 'Full-Time',
            data: {
                en: { title: 'Marketing Specialist', location: 'Remote / Yerevan', department: 'Marketing' },
                ru: { title: 'Маркетолог', location: 'Удаленно / Ереван', department: 'Маркетинг' },
                hy: { title: 'Մարքեթինգի մասնագետ', location: 'Հեռավար / Երևան', department: 'Մարքեթինգ' }
            }
        },
        {
            id: 3,
            type: 'Part-Time',
            data: {
                en: { title: 'Data Analyst', location: 'Yerevan, Armenia', department: 'Analytics' },
                ru: { title: 'Аналитик данных', location: 'Ереван, Армения', department: 'Аналитика' },
                hy: { title: 'Տվյալների վերլուծաբան', location: 'Երևան, Հայաստան', department: 'Վերլուծություն' }
            }
        }
    ]

    return careers.map(c => ({
        id: c.id,
        type: c.type,
        // @ts-ignore
        ...c.data[lang] || c.data['en']
    })) as ICareer[]
})