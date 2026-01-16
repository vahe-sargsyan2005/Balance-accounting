import type { IFaqItem } from '~/types/faq'

export default defineEventHandler((event) => {
    const query = getQuery(event)
    const lang = query.lang as string || 'en'

    const data: Record<string, IFaqItem[]> = {
        hy: [
            {
                question: "Ի՞նչ պետք է ներառի ֆինանսական պլանը:",
                answer: "Միանշանակ, դուք կունենաք ձեր անձնական խորհրդատուն: Horqur-ում մենք կարևորում ենք ամուր, անհատական կապի ստեղծումը: Մենք գիտենք, որ յուրաքանչյուրի ֆինանսական ուղին տարբեր է:"
            },
            {
                question: "Կարո՞ղ եք օգնել ինձ պլանավորել թոշակի անցնելը:",
                "answer": "Այո, մենք առաջարկում ենք կենսաթոշակային պլանավորման համապարփակ ռազմավարություններ՝ ապահովելու ձեր ֆինանսական անվտանգությունն ու հանգիստը ապագայում:"
            },
            {
                question: "Ո՞րն է ձեր ներդրումային փիլիսոփայությունը:",
                answer: "Մեր փիլիսոփայությունը հիմնված է երկարաժամկետ արժեքի ստեղծման, ռիսկերի դիվերսիֆիկացման և տվյալների վրա հիմնված որոշումների կայացման վրա:"
            },
            {
                question: "Արդյո՞ք ես կունենամ անհատական խորհրդատու:",
                answer: "Այո, յուրաքանչյուր հաճախորդի տրամադրվում է անձնական մենեջեր, ով հասանելի է ձեր հարցերին պատասխանելու և ուղղորդելու համար:"
            }
        ],
        ru: [
            {
                question: "Что должен включать финансовый план?",
                answer: "Безусловно, у вас будет личный советник. В Horqur мы ценим создание прочных личных связей. Мы понимаем, что финансовый путь у всех разный, поэтому подбираем стратегии индивидуально."
            },
            {
                question: "Вы можете помочь с планированием пенсии?",
                answer: "Да, мы предлагаем комплексные стратегии пенсионного планирования, чтобы обеспечить вашу финансовую безопасность и душевное спокойствие в будущем."
            },
            {
                question: "Какова ваша инвестиционная философия?",
                answer: "Наша философия основана на создании долгосрочной ценности, диверсификации рисков и принятии решений на основе глубокого анализа данных."
            },
            {
                question: "Будет ли у меня персональный консультант?",
                answer: "Да, каждому клиенту назначается персональный менеджер, который всегда доступен для ответов на вопросы и сопровождения ваших сделок."
            }
        ],
        en: [
            {
                question: "What Should A Financial Plan Include?",
                answer: "Absolutely, you’ll have your own personal advisor. At Horqur, we’re all about building a strong, one-on-one connection between you and your advisor."
            },
            {
                question: "Can You Help Me Plan For Retirement?",
                answer: "Yes, we offer comprehensive retirement planning strategies to ensure your financial security and peace of mind for the future."
            },
            {
                question: "What Is Your Investment Philosophy?",
                answer: "Our philosophy is grounded in long-term value creation, risk diversification, and data-driven decision-making processes."
            },
            {
                question: "Will I Have A Dedicated Advisor?",
                answer: "Yes, every client is paired with a dedicated advisor who focuses on getting to know you and helping you reach your unique financial goals."
            }
        ]
    }

    return data[lang] || data['en']
})