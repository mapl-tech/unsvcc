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
    title: 'Grocery Bag Food Program',
    image: '/images/programs/food-program.png',
    description: 'The Coalition Grocery Bag Food Program is designed to give seniors access to food on a weekly or as needed basis for a $25 donation for a bag of groceries valued up to $100 per bag. This is not a food bank program; our services are exclusive to coalition members.',
  },
  {
    title: 'Housing Support',
    image: '/images/programs/housing.png',
    description: 'The Coalition Housing Support program provides members with rental apartment information stored in our national database for rent through the goodwill of some residential property management companies and building owners.',
  },
  {
    title: 'Support Line',
    image: '/images/programs/support-line.png',
    description: 'This is for when a member has a problem and doesn\'t know what to do. We are here to answer their questions and help if we can. We will work with all levels of government agencies, large and small businesses, and individuals to get the information, answers, and favourable results for our members.',
  },
  {
    title: 'Legal Services',
    image: '/images/programs/legal.png',
    description: 'The United Senior Citizen Voice-for-Change Coalition gives its members easy access to professional and affordable legal advice and representation at reduced rates from a group of panel lawyers and paralegal services.',
  },
  {
    title: 'Group Insurance Support',
    image: '/images/programs/group-insurance.png',
    description: 'Membership gives you exclusive access to group insurance rates on home, auto, and content insurance not available to everyone. The Coalition does not provide information on any insurance products or services. Members are referred to a selected group of insurance providers and business partners in support of the Coalition programs and services.',
  },
  {
    title: 'Retirement Planning Support',
    image: '/images/programs/retirement.png',
    description: 'No matter where you are on your journey to retirement, the transition from work to retirement is necessary financially. The Coalition will host retirement planning workshops with representatives from different groups and organizations to provide services and get feedback on people\'s feelings regarding retirement.',
  },
]

export const DONATION_AMOUNTS = [58, 108, 258, 508]
