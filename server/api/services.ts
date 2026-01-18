import { defineEventHandler, getQuery } from 'h3'
import type { IService } from '~/types/services'

export default defineEventHandler((event) => {
    const query = getQuery(event)
    const lang = (query.lang as string) || 'en'

    const servicesRaw = [
        {
            id: 1,
            iconName: 'i-lucide-brain-circuit',
            image: '/images/services/1.jpg',
            data: {
                en: {
                    title: 'AI & Analytics',
                    features: ['Intelligent data insights', 'Predictive business modeling', 'Smarter decision support', 'Trend analysis']
                },
                ru: {
                    title: 'ИИ и Аналитика',
                    features: ['Интеллектуальный анализ данных', 'Предиктивное моделирование', 'Поддержка принятия решений', 'Анализ трендов']
                },
                hy: {
                    title: 'Արհեստական Ինտելեկտ և Անալիտիկա',
                    features: ['Խելացի տվյալների վերլուծություն', 'Կանխատեսող բիզնես մոդելավորում', 'Խելացի որոշումների աջակցություն', 'Տենդենցների վերլուծություն']
                }
            }
        },
        {
            id: 2,
            iconName: 'i-lucide-shield-alert',
            image: '/images/services/2.jpg',
            data: {
                en: {
                    title: 'Risk & Financial Advisory',
                    features: ['Tailored risk solutions', 'Strategic financial planning', 'Investment risk assessment']
                },
                ru: {
                    title: 'Управление рисками и Финансы',
                    features: ['Индивидуальные решения по рискам', 'Стратегическое планирование', 'Оценка инвестиционных рисков']
                },
                hy: {
                    title: 'Ռիսկ և Ֆինանսական Խորհրդատվություն',
                    features: ['Անհատականացված ռիսկային լուծումներ', 'Ռազմավարական ֆինանսական պլանավորում', 'Ներդրումային ռիսկերի գնահատում']
                }
            }
        },
        {
            id: 3,
            iconName: 'i-lucide-file-check-2',
            image: '/images/services/3.jpg',
            data: {
                en: {
                    title: 'Audit & Assurance',
                    features: ['Transparent financial reviews', 'Compliance-driven approach', 'Internal controls assessment']
                },
                ru: {
                    title: 'Аудит и Заверение',
                    features: ['Прозрачные финансовые проверки', 'Соблюдение нормативов', 'Оценка внутреннего контроля']
                },
                hy: {
                    title: 'Աուդիտ և Հավաստիացում',
                    features: ['Թափանցիկ ֆինանսական վերանայումներ', 'Համապատասխանության մոտեցում', 'Ներքին վերահսկողության գնահատում']
                }
            }
        },
        {
            id: 4,
            iconName: 'i-lucide-rocket',
            image: '/images/services/4.jpg',
            data: {
                en: {
                    title: 'Business Transformation',
                    features: ['Growth-focused strategies', 'Operational excellence', 'Digital transformation planning']
                },
                ru: {
                    title: 'Трансформация бизнеса',
                    features: ['Стратегии роста', 'Операционное совершенство', 'Планирование цифровой трансформации']
                },
                hy: {
                    title: 'Բիզնեսի Տրանսֆորմացիա',
                    features: ['Աճի վրա հիմնված ռազմավարություններ', 'Գործառնական գերազանցություն', 'Թվային փոխակերպման պլանավորում']
                }
            }
        },
        {
            id: 5,
            iconName: 'i-lucide-graduation-cap',
            image: '/images/services/5.jpg',
            data: {
                en: {
                    title: 'Training & Development',
                    features: ['Employee financial literacy', 'Accounting workshops', 'Leadership training']
                },
                ru: {
                    title: 'Обучение и Развитие',
                    features: ['Финансовая грамотность сотрудников', 'Воркшопы по бухгалтерии', 'Тренинги лидерства']
                },
                hy: {
                    title: 'Դասընթացներ և Կրթություն',
                    features: ['Ֆինանսական գրագիտություն', 'Հաշվապահական աշխատաժողովներ', 'Առաջնորդության դասընթացներ']
                }
            }
        },
        {
            id: 6,
            iconName: 'i-lucide-cpu',
            image: '/images/services/6.jpg',
            data: {
                en: {
                    title: 'Digitalization & Automation',
                    features: ['Automated bookkeeping', 'Digital reporting dashboards', 'AI-driven insights']
                },
                ru: {
                    title: 'Цифровизация и Автоматизация',
                    features: ['Автоматизированная бухгалтерия', 'Цифровые дашборды', 'ИИ-аналитика']
                },
                hy: {
                    title: 'Թվայնացում և Ավտոմատացում',
                    features: ['Ավտոմատացված հաշվապահություն', 'Թվային հաշվետվություններ', 'ԱԻ կանխատեսումներ']
                }
            }
        },
        {
            id: 7,
            iconName: 'i-lucide-briefcase',
            image: '/images/services/7.jpg',
            data: {
                en: {
                    title: 'Consulting & Strategy',
                    features: ['Tailored business consulting', 'Financial strategy planning', 'Market analysis']
                },
                ru: {
                    title: 'Консалтинг и Стратегия',
                    features: ['Индивидуальный консалтинг', 'Финансовое планирование', 'Анализ рынка']
                },
                hy: {
                    title: 'Խորհրդատվություն և Ռազմավարություն',
                    features: ['Անհատականացված խորհրդատվություն', 'Ֆինանսական ռազմավարություն', 'Շուկայական վերլուծություն']
                }
            }
        },
        {
            id: 8,
            iconName: 'i-lucide-life-buoy',
            image: '/images/services/8.jpg',
            data: {
                en: {
                    title: 'Support & Compliance',
                    features: ['Regulatory compliance', 'Audit preparation', 'Crisis management']
                },
                ru: {
                    title: 'Поддержка и Соблюдение норм',
                    features: ['Соблюдение нормативов', 'Подготовка к аудиту', 'Антикризисное управление']
                },
                hy: {
                    title: 'Աջակցություն և Համապատասխանություն',
                    features: ['Կարգավորող համապատասխանություն', 'Աուդիտի նախապատրաստում', 'Արտակարգ իրավիճակների կառավարում']
                }
            }
        }
    ]

    return servicesRaw.map(s => ({
        id: s.id,
        iconName: s.iconName,
        image: s.image,
        // @ts-ignore
        ...s.data[lang] || s.data['en']
    })) as IService[]
})