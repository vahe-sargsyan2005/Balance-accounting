import type { IService, IServiceApiResponse } from '~/types/services';

const serviceData: IServiceApiResponse = {
    'en': [
        {
            id: 1,
            iconName: 'i-lucide-infinity',
            title: 'AI & Analytics',
            features: [
                'Intelligent data insights',
                'Predictive business modeling',
                'Smarter decision support',
                'Trend and pattern analysis',
                'Custom reporting dashboards',
                'Real-time data monitoring',
                'Automated alerts and recommendations'
            ],
            image: '/images/services/1.jpg',
        },
        {
            id: 2,
            iconName: 'i-lucide-shield-half',
            title: 'Risk & Financial Advisory',
            features: [
                'Tailored risk solutions',
                'Strategic financial planning',
                'Ongoing expert support',
                'Investment risk assessment',
                'Regulatory compliance guidance',
                'Cash flow optimization',
                'Scenario and sensitivity analysis'
            ],
            image: '/images/services/2.jpg',
        },
        {
            id: 3,
            iconName: 'i-lucide-gauge',
            title: 'Audit & Assurance',
            features: [
                'Transparent financial reviews',
                'Compliance-driven approach',
                'Actionable business insights',
                'Internal controls assessment',
                'Process improvement recommendations',
                'Fraud detection support',
                'Risk mitigation guidance'
            ],
            image: '/images/services/3.jpg',
        },
        {
            id: 4,
            iconName: 'i-lucide-git-branch',
            title: 'Business Transformation',
            features: [
                'Growth-focused strategies',
                'Operational excellence',
                'Measurable business outcomes',
                'Change management support',
                'Process automation consulting',
                'Organizational restructuring',
                'Digital transformation planning'
            ],
            image: '/images/services/4.jpg',
        },
        {
            id: 5,
            iconName: 'i-lucide-book-open',
            title: 'Training & Development',
            features: [
                'Employee financial literacy programs',
                'Workshops on accounting best practices',
                'Continuous professional development',
                'Leadership training',
                'Compliance and regulatory courses',
                'Software and tools training',
                'Interactive case studies'
            ],
            image: '/images/services/5.jpg',
        },
        {
            id: 6,
            iconName: 'i-lucide-cpu',
            title: 'Digitalization & Automation',
            features: [
                'Automated bookkeeping systems',
                'Digital reporting dashboards',
                'Integration with cloud services',
                'Workflow automation',
                'Real-time financial tracking',
                'AI-driven predictive insights',
                'Error reduction and efficiency improvement'
            ],
            image: '/images/services/6.jpg',
        },
        {
            id: 7,
            iconName: 'i-lucide-users',
            title: 'Consulting & Strategy',
            features: [
                'Tailored business consulting',
                'Financial strategy planning',
                'Risk management guidance',
                'Market analysis',
                'Operational optimization',
                'Competitor benchmarking',
                'Strategic roadmap creation'
            ],
            image: '/images/services/7.jpg',
        },
        {
            id: 8,
            iconName: 'i-lucide-life-buoy',
            title: 'Support & Compliance',
            features: [
                'Regulatory compliance checks',
                'Ongoing client support',
                'Audit preparation assistance',
                'Documentation review',
                'Reporting assistance',
                'Crisis management support',
                'Continuous monitoring of updates'
            ],
            image: '/images/services/8.jpg',
        }
    ] as IService[],

    'hy': [
        {
            id: 1,
            iconName: 'i-lucide-infinity',
            title: 'Արհեստական Ինտելեկտ և Անալիտիկա',
            features: [
                'Խելացի տվյալների վերլուծություն',
                'Կանխատեսող բիզնես մոդելավորում',
                'Խելացի որոշումների աջակցություն',
                'Տենդենցների և նմուշների վերլուծություն',
                'Անհատական հաշվետվությունների վահանակներ',
                'Նորագույն տվյալների հսկողություն',
                'Ավտոմատացված զգուշացումներ և առաջարկություններ'
            ],
            image: '/images/services/1.jpg',
        },
        {
            id: 2,
            iconName: 'i-lucide-shield-half',
            title: 'Ռիսկ և Ֆինանսական Խորհրդատվություն',
            features: [
                'Անհատականացված ռիսկային լուծումներ',
                'Ռազմավարական ֆինանսական պլանավորում',
                'Շարունակական փորձագիտական աջակցություն',
                'Վարկային և ներդրումային ռիսկերի գնահատում',
                'Կարգավորող համապատասխանության խորհրդատվություն',
                'Դրամական հոսքի օպտիմալացում',
                'Սցենարային և զգայունության վերլուծություն'
            ],
            image: '/images/services/2.jpg',
        },
        {
            id: 3,
            iconName: 'i-lucide-gauge',
            title: 'Աուդիտ և Հավաստիացում',
            features: [
                'Թափանցիկ ֆինանսական վերանայումներ',
                'Համապատասխանության վրա հիմնված մոտեցում',
                'Գործողության ենթակա բիզնեսի պատկերացումներ',
                'Ներքին վերահսկողության գնահատում',
                'Պրոցեսների բարելավման առաջարկներ',
                'Վճռականության հայտնաբերման աջակցություն',
                'Ռիսկերի նվազեցման ուղեցույց'
            ],
            image: '/images/services/3.jpg',
        },
        {
            id: 4,
            iconName: 'i-lucide-git-branch',
            title: 'Բիզնեսի Տրանսֆորմացիա',
            features: [
                'Աճի վրա հիմնված ռազմավարություններ',
                'Գործառնական գերազանցություն',
                'Չափելի բիզնես արդյունքներ',
                'Փոփոխությունների կառավարման աջակցություն',
                'Պրոցեսների ավտոմատացման խորհրդատվություն',
                'Կազմակերպչական վերակառուցում',
                'Թվային փոխակերպման պլանավորում'
            ],
            image: '/images/services/4.jpg',
        },
        {
            id: 5,
            iconName: 'i-lucide-book-open',
            title: 'Դասընթացներ և Կրթություն',
            features: [
                'Փաստագրման և ֆինանսների աշխատակիցների կրթություն',
                'Լավագույն պրակտիկայի աշխատաժողովներ',
                'Շարունակական մասնագիտական զարգացում',
                'Աղեկավարման և առաջնորդության դասընթացներ',
                'Համապատասխանության և կանոնակարգի դասընթացներ',
                'Ծրագրային ապահովման և գործիքների ուսուցում',
                'Ինտերակտիվ դեպքերի ուսումնասիրություն'
            ],
            image: '/images/services/5.jpg',
        },
        {
            id: 6,
            iconName: 'i-lucide-cpu',
            title: 'Թվայնացում և Ավտոմատացում',
            features: [
                'Ավտոմատացված հաշվապահական համակարգեր',
                'Թվային հաշվետվությունների վահանակներ',
                'Ելքային ինտեգրացիաներ ամպային ծառայությունների հետ',
                'Աշխատակարգերի ավտոմատացում',
                'Նորագույն ֆինանսական հսկողություն',
                'Արհեստական ինտելեկտի կանխատեսումներ',
                'Սխալների նվազեցում և արդյունավետության բարելավում'
            ],
            image: '/images/services/6.jpg',
        },
        {
            id: 7,
            iconName: 'i-lucide-users',
            title: 'Խորհրդատվություն և Ռազմավարություն',
            features: [
                'Անհատականացված բիզնես խորհրդատվություն',
                'Ֆինանսական ռազմավարության պլանավորում',
                'Ռիսկի կառավարում',
                'Շուկայական վերլուծություն',
                'Գործառնական օպտիմալացում',
                'Պայքարային համեմատություն',
                'Ռազմավարական ճանապարհային քարտեզի ստեղծում'
            ],
            image: '/images/services/7.jpg',
        },
        {
            id: 8,
            iconName: 'i-lucide-life-buoy',
            title: 'Աջակցություն և Համապատասխանություն',
            features: [
                'Կարգավորող համապատասխանության ստուգումներ',
                'Շարունակական հաճախորդների աջակցություն',
                'Աուդիտի նախապատրաստում',
                'Փաստաթղթերի վերանայում',
                'Հաշվետվությունների պատրաստում',
                'Արտակարգ իրավիճակների կառավարում',
                'Թարմացումների շարունակական մոնիթորինգ'
            ],
            image: '/images/services/8.jpg',
        }
    ] as IService[],
};

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const lang = query.lang as string || 'en';

    await new Promise(resolve => setTimeout(resolve, 300));

    return serviceData[lang] || serviceData['en'];
});
