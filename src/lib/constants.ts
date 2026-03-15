export const SITE_NAME = 'UNSVCC'
export const SITE_FULL_NAME = 'United Senior Citizen Voice for Change Coalition'
export const SITE_DESCRIPTION = 'Amplifying the voices of senior citizens and advocating for policies, services, and community initiatives that protect their rights and enhance their well-being.'
export const CRA_NUMBER = '753212158RC0001'
export const CONTACT_EMAIL = 'info@unsvcc.org'
export const CONTACT_PHONE = '+1 519 703 3443'
export const CONTACT_HOURS = 'Mon – Fri: 9:00 am – 5:00 pm'

export const NAV_LINKS = [
  {
    label: 'About Us',
    href: '/about',
    dropdown: [
      { label: 'Our Mandate', href: '/about' },
      { label: 'Our Team', href: '/team' },
      { label: 'UNSVCC Centre', href: '/centre' },
    ],
  },
  { label: 'Programs', href: '/programs' },
  { label: 'Membership', href: '/membership' },
  { label: 'Contact', href: '/contact' },
]

export const FOOTER_QUICK_LINKS = [
  { label: 'About Us', href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Membership', href: '/membership' },
  { label: 'Contact', href: '/contact' },
]

export const FOOTER_GET_INVOLVED = [
  { label: 'Volunteer', href: '/volunteer' },
  { label: 'Donate', href: '/donate' },
  { label: 'Partner With Us', href: '/contact' },
]

export const SOCIAL_LINKS = [
  { label: 'Facebook', href: '#', icon: 'facebook' as const },
  { label: 'Twitter', href: '#', icon: 'twitter' as const },
  { label: 'Instagram', href: '#', icon: 'instagram' as const },
  { label: 'LinkedIn', href: '#', icon: 'linkedin' as const },
]

export const PROGRESS_BARS = [
  { label: 'Community Programs Fund', current: 12400, goal: 20000, percent: 62 },
  { label: 'Senior Rights Education', current: 7800, goal: 15000, percent: 52 },
  { label: 'UNSVCC Centre Building Fund', current: 34200, goal: 100000, percent: 34 },
]

export const FEATURED_PROGRAMS = [
  {
    title: 'Advocating for Seniors',
    image: '/images/programs/advocating.jpg',
    description: 'The United Senior Citizen Voice for Change Coalition addresses senior-citizen poverty, supporting individuals and communities, advocating for policy changes, raising awareness about the root cause of senior-citizen poverty, finding resources, creating solutions, and fighting for those who cannot fight for themselves.',
  },
  {
    title: 'Help Support Line',
    image: '/images/programs/support-line.png',
    description: 'Take calls from seniors needing assistance, such as crisis intervention, food, housing, and we help if we can, or make referrals to other community organizations. Our support line offers a range of services, including emotional support and information about available resources.',
  },
  {
    title: 'Housing Challenges Facing Seniors',
    image: '/images/programs/housing.png',
    description: 'The coalition housing database programs provide seniors with information on homes available for rent throughout our national rental apartment database, with rent payment up to 30% below market value.',
  },
  {
    title: 'Access to Food Resources',
    image: '/images/programs/food-program.png',
    description: 'UNSVCC provides a variety of food programs that support older adults in maintaining healthy eating habits. The coalition will establish food support centers exclusively for seniors, providing them with enough food to eliminate the worry of having enough to eat tomorrow.',
  },
  {
    title: 'Health and Wellness Support',
    image: '/images/programs/health-wellness.jpg',
    description: 'The Coalition Family Support Wellness and Safety Intervention team provides home visitation or telephone reassurance checks on a senior citizen to determine the wellness of that person.',
  },
  {
    title: 'Digital Skills Training Program',
    image: '/images/programs/digital-skills.jpg',
    description: 'The program aims to support seniors by providing digital literacy training. These skills can help seniors access community resources through digital platforms and enhance their quality of life by improving their social connections.',
  },
]

export const DONATION_AMOUNTS = [58, 108, 258, 508]
