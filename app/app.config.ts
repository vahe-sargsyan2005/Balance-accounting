export default defineAppConfig({
    global: {
        name: 'Balance Accounting',
        logo: '/logo.png',
        favicon: '/favicon.ico',
        email: 'w33bv.gl@gmail.com',
        phone: '+374 (94) 161-331',
        url: 'https://balance-accounting.example.com',
        author: '@Vahesargsyan2005',
    },
    social: [
        { name: 'Facebook', href: 'https://facebook.com/balanceaccounting', icon: 'lucide:facebook' },
        { name: 'Phone', href: 'tel:+37400000000', icon: 'lucide:phone' },
        { name: 'Email', href: 'mailto:info@balance.am', icon: 'lucide:mail' }
    ],
    features: {
        analytics: true,
    }
})
