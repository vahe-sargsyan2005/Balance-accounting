import { IReview, ITestimonialApiResponse } from '~/types/testimonials';

const testimonialData: ITestimonialApiResponse = {
    'en': [
        {
            id: 1,
            text: "The financial strategy team delivered clear, actionable insights that helped us stabilize cash flow. Their guidance was practical and easy to implement.",
            author: "Էդո ձյա",
            title: "легенду знать надо",
            avatar: '/images/testimonials/edo-dzya.png',
        },
        {
            id: 2,
            text: "We struggled with cost management until their consultants stepped in with a structured plan. Our operations became more efficient within weeks.",
            author: "Vahe Sargsyan",
            title: "Lead Inventor",
            avatar: 'https://avatars.githubusercontent.com/u/226748328?v=4',
        },
        { id: 4, text: "Truly fantastic results! We saw a massive improvement.", author: "Mary Poppins", title: "Super Nanny", avatar: 'https://ik.imagekit.io/storybird/images/78c1518d-2362-45d8-b0f6-21b3565ae544/0_455955396.png?tr=q-80' },
    ] as IReview[],

    'ru': [
        {
            id: 1,
            text: "Команда по финансовой стратегии предоставила четкие, действенные идеи, которые помогли нам стабилизировать денежный поток. Их руководство было практичным и легко применимым.",
            author: "Капитан Крюк",
            title: "Главный Пиратский Директор",
            avatar: '/avatars/captain-kook.jpg',
        },
        {
            id: 2,
            text: "У нас были проблемы с управлением расходами, пока их консультанты не вмешались с четким планом. Наша операционная деятельность стала более эффективной за считанные недели.",
            author: "Доктор Франкенштейн",
            title: "Главный Изобретатель",
            avatar: '/avatars/frankenstein.jpg',
        },
        {
            id: 3,
            text: "Horqur изменил нашу стратегию благодаря экспертному руководству. Их квалифицированная команда помогла нам расти уверенно и устойчиво на каждом этапе развития.",
            author: "Шерлок Холмс",
            title: "Консультирующий Детектив",
            avatar: '/avatars/sherlock.jpg',
        },
        { id: 4, text: "Поистине фантастические результаты! Мы увидели огромное улучшение.", author: "Мэри Поппинс", title: "Супер-Няня", avatar: '/avatars/poppins.jpg' },
    ] as IReview[],

    'hy': [
        {
            id: 1,
            text: "Ֆինանսական ռազմավարության թիմը տրամադրեց հստակ, գործուն լուծումներ, որոնք օգնեցին մեզ կայունացնել դրամական հոսքերը։ Նրանց ղեկավարումը գործնական էր և հեշտ իրականացվող։",
            author: "Կապիտան Կուկ",
            title: "Գլխավոր Ծովահեն Տնօրեն",
            avatar: '/avatars/captain-kook.jpg',
        },
        {
            id: 2,
            text: "Մենք դժվարանում էինք ծախսերի կառավարման հարցում, մինչև նրանց խորհրդատուները ներկայացան կառուցվածքային ծրագրով։ Մեր գործառնությունները դարձան ավելի արդյունավետ շաբաթների ընթացքում։",
            author: "Դոկտոր Ֆրանկենշտեյն",
            title: "Գլխավոր Գյուտարար",
            avatar: '/avatars/frankenstein.jpg',
        },
        {
            id: 3,
            text: "Horqur-ը փոխակերպեց մեր ռազմավարությունը փորձագիտական ​​ուղղորդմամբ: Նրանց հմուտ թիմն օգնեց մեզ վստահորեն և կայուն աճել զարգացման յուրաքանչյուր փուլում:",
            author: "Շերլոկ Հոլմս",
            title: "Խորհրդատու Դետեկտիվ",
            avatar: '/avatars/sherlock.jpg',
        },
        { id: 4, text: "Իսկապես ֆանտաստիկ արդյունքներ։ Մենք տեսանք զանգվածային բարելավում։", author: "Մերի Փոփինս", title: "Սուպեր-Դայակ", avatar: '/avatars/poppins.jpg' },
    ] as IReview[],
};

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const lang = query.lang as string || 'en';

    await new Promise(resolve => setTimeout(resolve, 300));

    return testimonialData[lang] || testimonialData['en'];
});