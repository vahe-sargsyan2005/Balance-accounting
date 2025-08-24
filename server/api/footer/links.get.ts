export default defineEventHandler(() => {
    return {
        sections: [
            {
                title: "Փաստաթղթեր",
                links: [
                    { label: "Տնտեսական հաշվետվություններ", href: "/reports/economic" },
                    { label: "Աուդիտներ", href: "/reports/audit" },
                    { label: "Հարկային փաստաթղթեր", href: "/reports/tax" }
                ]
            },
            {
                title: "Ծառայություններ",
                links: [
                    { label: "Հաշվապահություն", href: "/services/accounting" },
                    { label: "Ֆինանսական վերլուծություն", href: "/services/finance-analysis" },
                    { label: "Տնտեսական ծրագրեր", href: "/services/economic-plans" },
                    { label: "Տնտեսական հաշվետվություններ", href: "/services/reports" },
                    { label: "Աուդիտներ", href: "/services/audit" },
                    { label: "Հարկային փաստաթղթեր", href: "/services/tax-docs" }
                ]
            },
            {
                title: "Մեր մասին",
                links: [
                    { label: "Մեր թիմը", href: "/about/team" },
                    { label: "Հետադարձ կապ", href: "/about/contact" },
                    { label: "Բիզնես խորհրդատվություն", href: "/about/consulting" },
                    { label: "Privacy Policy", href: "/privacy-policy" },
                    { label: "Terms & Conditions", href: "/terms-and-conditions" }
                ]
            }
        ]
    }
})
