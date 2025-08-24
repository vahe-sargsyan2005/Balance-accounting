export default defineAppConfig({
    site: {
        name: 'Balance Accounting',
        logo: '/logo.png',
        favicon: '/favicon.ico',
        description: 'Ղեկավարեք ձեր ֆինանսները հեշտ և հարմար',
        url: 'https://balance-accounting.example.com',
        author: '@Vahesargsyan2005',
    },
    social: [
        { name: 'Facebook', href: 'https://facebook.com/balanceaccounting', icon: 'lucide:facebook' },
        { name: 'WhatsApp', href: 'https://wa.me/000000000', icon: 'lucide:message-square' },
        { name: 'Web', href: 'https://vahe.anidzen.com', icon: 'lucide:globe' },
        { name: 'Phone', href: 'tel:+37400000000', icon: 'lucide:phone' },
        { name: 'Email', href: 'mailto:info@balance.am', icon: 'lucide:mail' }
    ],
    features: {
        analytics: true,
    }
})
