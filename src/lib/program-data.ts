export interface Program {
  title: string
  image: string
  body: string
  link?: string
}

export const programData: Record<string, Program> = {
  grocery: {
    title: 'Grocery Bag Food Program',
    image: '/images/programs/food-program.png',
    body: 'The Coalition Grocery Bag Food Program is designed to give seniors access to food on a weekly or as-needed basis for a $25 donation for a bag of groceries valued up to $100 per bag. This is not a food bank program; our services are exclusive to coalition members. The $25 donation will then be used to purchase more inventory to maintain the integrity of our food program.',
  },
  supportline: {
    title: 'Support Line',
    image: '/images/programs/support-line.png',
    body: 'This is for when a member has a problem and doesn\'t know what to do. We are here to answer their questions and help if we can. We will work with all levels of government agencies, large and small businesses, and individuals to get the information, answers, and favorable results for our members. Fighting for seniors is what we do.',
  },
  legal: {
    title: 'Legal Services',
    image: '/images/programs/legal.png',
    body: 'The United Senior Citizen Voice-for-Change Coalition gives its members easy access to professional and affordable legal advice and representation at reduced rates from a group of panel lawyers and paralegal services. Members are entitled to basic estate planning documents, including your Will, Living Will, and Power of Attorney preparation. The Coalition does not provide any legal services or provide any legal information or representation., when a member has questions on legal issue and needs advice, they are directed to a panel lawyers or paralegal professionals and receive legal advice, consultation, or representation on several legal matters, including writing letters or making phone calls on their behalf at reduced rates. Fee services are determined by your legal representative.',
    link: 'https://csacoghiel.com/',
  },
  retirement: {
    title: 'Retirement Planning Support',
    image: '/images/programs/retirement.png',
    body: 'No matter where you are on your journey to retirement, the transition from work to retirement is necessary financially. The Coalition will host retirement planning workshops with representatives from different groups and organizations to provide services and get feedback on people\'s feelings regarding retirement planning while working and their sense of readiness for retirement. Whether you are planning for retirement or thinking about it, we have plenty of resources to help you every step of the way, from round-table discussions and tips to help you make the most of your retirement. The coalition is in your corner. When people think about retirement planning, financial planning often comes to mind. And that\'s a big part of it. But there\'s more to planning for retirement than finances. It\'s a big milestone in life, and like all significant changes, it can also have emotional and social impacts. You deserve peace of mind as you prepare to retire. The collation can help\n\nThe coalition offices provide a one-stop option for retirement planning information and support, rather than leaving it up to members alone. The coalition will push to make it automatic and mandatory for employers to establish private workplace pensions, and support savings plans compulsory for employees, and employees must join them. Or create to pool of funds and invest in a retirement portfolio. At the coalition, we know that partnerships work if structured properly. We believe that when individual money is pooled and invested by professional investment companies, these actions can make a big difference in poverty reduction for seniors. The coalition will be there for our members; they are the people we fight for because they become a part of who we are. We will be there if you need us; you don\'t have to travel this path alone.',
  },
  jobsconnect: {
    title: 'Jobs Connect for Seniors',
    image: '/images/programs/jobs.png',
    body: 'Many seniors feel there is no place for them to earn an income after retiring from their 9-5 jobs. How can we change that? The United Senior Citizen Voice for Change coalition understands the need for some seniors to continue working. This can be based on many factors, such as the continuing high increase in rent and food. The coalition Jobs Connect programs will connect seniors looking for work with employers looking for workers.',
  },
  transportation: {
    title: 'Transportation Support Services',
    image: '/images/programs/transport.png',
    body: 'The United Senior Citizen Voice for Change Coalition membership card gives a member up to a 40% discount on each one-way taxi ride from companies supporting the Coalition transportation program.',
  },
  housing: {
    title: 'Housing Support',
    image: '/images/programs/housing.png',
    body: 'The Coalition Housing Support program provides members with rental apartment information stored in our national database for rent through the goodwill of some residential property management companies and building owners. The Coalition will continue negotiating with building owners and property management companies to provide reduced rent payments to members up to forty percent below market value, plus Cap-Rent. This means lower monthly payments with no annual increase in monthly payments for seniors.\n\nThe Coalition rental housing support program is easy when a Coalition member is searching for a place to call home. They simply call the Coalition office and speak to a Housing Support staff member, who will access the housing database and provide that member with the housing information available.\n\nThe coalition will also purchase distressed and foreclosed properties, renovate or resell them to people over 55 who are trying to re-establish their lives by purchasing, a place to call home with the downpayment assistance from the coalition membership pool funds program, called the homeownership partnership plan for seniors ware the coalition will subsiding up to 55% of the down payment needed to purchase a place to called MYOWMPLACE.',
  },
  familysupport: {
    title: 'Family Support Wellness Safety Check',
    image: '/images/programs/family-support.png',
    body: 'The United Senior Citizen Voice-for-Change Coalition gives its members easy access to professional and affordable legal advice and representation at reduced rates from a group of panel lawyers and paralegal services. Members are entitled to basic estate planning documents, including your Will, Living Will, and Power of Attorney preparation. The Coalition does not provide any legal services or provide any legal information or representation., when a member has questions on legal issue and needs advice, they are directed to a panel lawyers or paralegal professionals and receive legal advice, consultation, or representation on several legal matters, including writing letters or making phone calls on their behalf at reduced rates. Fee services are determined by your legal representative.',
  },
  incometax: {
    title: 'Income Tax Preparation',
    image: '/images/programs/income-tax.png',
    body: 'The United Senior Citizen Voice for Change Coalition will provide free income tax preparation services to senior citizens with an annual income of less than $25,000 annually through professional tax preparation companies selected by the Coalition to support members.',
  },
  lifeinsurance: {
    title: 'Life Insurance Cancellation Supports Payment',
    image: '/images/programs/life-insurance.png',
    body: 'Membership gives an individual who has a life insurance policy for more than ten years and has been in payment default for more than two months the opportunity to have the coalition continue the payment under certain terms and conditions set forth by the coalition.',
  },
  shopping: {
    title: 'Shopping Discount Program',
    image: '/images/programs/shopping.png',
    body: 'If you\'re on a fixed income and seeing food costs continually going up, or if you are struggling to make ends meet on a tight budget, you are not alone. In 2023, nearly 9 million adults over 50 struggled with food and housing insecurity issues, and the pandemic has only made matters worse. The Coalition can connect you with resources and assistance to help you put food on the table, and membership makes it easier to participate in the Coalition shopping discount program that provides specials or discount shopping from participating suppliers and service providers.',
  },
  taxexemption: {
    title: 'National Tax-Exemption Grocery Card',
    image: '/images/programs/tax-exemption.png',
    body: 'The Coalition will introduce a zero-tax-exemption grocery card program to the government for low and middle-income Canadian seniors to help put more food on their tables. The Coalition believes that a national tax-exemption grocery card, supported by the government and grocery store operators, can make a big difference. The program is simple. Senior Citizens with a "ZERO-TAX-EXEMPTION GROCERY CARD", this card will offset the cost of groceries at selected grocery outlets. The United Senior Citizen Voice-for-Change Coalition pledged to fight for the implementation of this card. Your comment is welcome.',
  },
}
