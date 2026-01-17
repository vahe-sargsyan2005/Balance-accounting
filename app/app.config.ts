export default defineAppConfig({
    global: {
        name: 'Horqur Accounting',
        email: 'info@horqur.am',
        address: 'Երևան, Հայաստան',
        phone: '+374 99 999 999',
        url: 'https://balance.example.com',
        author: '@Vahesargsyan2005',
        logo: '/logo.png',
        favicon: '/favicon.ico',
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
