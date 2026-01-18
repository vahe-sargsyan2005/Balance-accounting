import { defineEventHandler, getQuery } from 'h3'
import type { ICourse } from '~/types/course'

export default defineEventHandler((event) => {
    const query = getQuery(event)
    const lang = (query.lang as string) || 'en'

    const courses = [
        {
            id: 1,
            icon: 'i-lucide-coins',
            image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=400&h=300',
            data: {
                en: { title: 'Financial Literacy 101', desc: 'Master the basics of personal finance and budgeting.', level: 'Beginner', duration: '4 weeks', price: '$199' },
                ru: { title: 'Финансовая грамотность 101', desc: 'Освойте основы личных финансов и бюджетирования.', level: 'Новичок', duration: '4 недели', price: '20 000 ֏' },
                hy: { title: 'Ֆինանսական գրագիտություն 101', desc: 'Տիրապետեք անձնական ֆինանսների հիմունքներին:', level: 'Սկսնակ', duration: '4 շաբաթ', price: '20 000 ֏' }
            }
        },
        {
            id: 2,
            icon: 'i-lucide-trending-up',
            image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=400&h=300',
            data: {
                en: { title: 'Investment Strategies', desc: 'Learn how to build a diversified portfolio.', level: 'Advanced', duration: '6 weeks', price: '$399' },
                ru: { title: 'Инвестиционные стратегии', desc: 'Узнайте, как создать диверсифицированный портфель.', level: 'Продвинутый', duration: '6 недель', price: '40 000 ֏' },
                hy: { title: 'Ներդրումային ռազմավարություններ', desc: 'Իմացեք, թե ինչպես ստեղծել բազմազան պորտֆել:', level: 'Առաջադեմ', duration: '6 շաբաթ', price: '40 000 ֏' }
            }
        },
        {
            id: 3,
            icon: 'i-lucide-bitcoin',
            image: 'https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?auto=format&fit=crop&q=80&w=400&h=300',
            data: {
                en: { title: 'Crypto & Blockchain', desc: 'Understanding the future of digital assets.', level: 'Intermediate', duration: '3 weeks', price: '$249' },
                ru: { title: 'Крипто и Блокчейн', desc: 'Понимание будущего цифровых активов.', level: 'Средний', duration: '3 недели', price: '25 000 ֏' },
                hy: { title: 'Կրիպտո և բլոկչեյն', desc: 'Հասկանալ թվային ակտիվների ապագան:', level: 'Միջին', duration: '3 շաբաթ', price: '25 000 ֏' }
            }
        }
    ]

    return courses.map(c => ({
        id: c.id,
        icon: c.icon,
        image: c.image,
        // @ts-ignore
        ...c.data[lang] || c.data['en']
    })) as ICourse[]
})