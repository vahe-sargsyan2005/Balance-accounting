export interface FooterLink {
    label: string
    href: string
}

export interface FooterSection {
    title: string
    links: FooterLink[]
}

export interface FooterApiResponse {
    sections: FooterSection[]
}
