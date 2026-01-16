import { defineEventHandler, getQuery } from 'h3'
import type { ICaseStudy } from '~/types/case'

export default defineEventHandler((event) => {
    const query = getQuery(event)
    const lang = (query.lang as string) || 'en'

    const cases = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800&h=600',
            data: {
                en: { client: 'TechStart Inc.', category: 'Audit', title: 'Optimizing Tax Strategy for a Tech Unicorn', result: 'Saved $2M' },
                ru: { client: 'TechStart Inc.', category: 'Аудит', title: 'Оптимизация налоговой стратегии для IT-стартапа', result: 'Экономия $2M' },
                hy: { client: 'TechStart Inc.', category: 'Աուդիտ', title: 'Հարկային ռազմավարության օպտիմալացում IT ստարտափի համար', result: 'Խնայվել է $2M' }
            }
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800&h=600',
            data: {
                en: { client: 'GreenRetail', category: 'Consulting', title: 'Financial Restructuring & Growth', result: '+45% Revenue' },
                ru: { client: 'GreenRetail', category: 'Консалтинг', title: 'Финансовая реструктуризация и рост', result: '+45% Выручки' },
                hy: { client: 'GreenRetail', category: 'Խորհրդատվություն', title: 'Ֆինանսական վերակառուցում և աճ', result: '+45% Եկամուտ' }
            }
        }
    ]

    return cases.map(c => ({
        id: c.id,
        image: c.image,
        // @ts-ignore
        ...c.data[lang] || c.data['en']
    })) as ICaseStudy[]
})