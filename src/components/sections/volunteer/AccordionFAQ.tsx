'use client'

import { useState } from 'react'
import { ChevronDownIcon } from '@/components/icons'

interface FAQItem {
  question: string
  answer: string
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'What kind of volunteer opportunities are available?',
    answer:
      'We offer a wide range of volunteer roles including front desk concierge, meal preparation assistant, special events volunteer, community outreach, grocery bag food program support, housing support, senior support line, legal services assistance, and administrative support.',
  },
  {
    question: 'Do I need any special skills or qualifications to volunteer?',
    answer:
      'No special qualifications are required for most volunteer roles. We welcome people from all backgrounds and skill levels. Training and orientation will be provided for your specific role. A compassionate attitude and willingness to help are the most important qualities.',
  },
  {
    question: 'How much time do I need to commit?',
    answer:
      'We offer flexible scheduling to fit your availability. You can volunteer on weekdays, weekends, or evenings. Whether you can give a few hours a week or a full day, every contribution makes a difference in the lives of Canadian seniors.',
  },
  {
    question: 'Will I receive training before starting?',
    answer:
      'Yes, all volunteers receive an orientation session and role-specific training. We want to make sure you feel confident and prepared to make the most of your volunteer experience while providing the best support to our community members.',
  },
  {
    question: 'Can I volunteer as part of a group or organization?',
    answer:
      'Absolutely! We welcome group volunteering from corporations, schools, faith-based organizations, and community groups. Group volunteering is a great way to build team spirit while giving back to the community. Contact us to discuss group volunteer opportunities.',
  },
]

export default function AccordionFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span
            className="font-heading font-bold text-sm text-advocacy-teal uppercase tracking-widest"
            style={{ letterSpacing: '0.12em' }}
          >
            Common Questions
          </span>
          <h3
            className="font-heading font-extrabold text-charcoal text-2xl lg:text-3xl mt-4"
            style={{ letterSpacing: '-0.02em' }}
          >
            Frequently Asked Questions
          </h3>
        </div>

        <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid #E8E8E8' }}>
          {FAQ_ITEMS.map((item, index) => (
            <div
              key={index}
              className={`accordion-item${openIndex === index ? ' open' : ''}`}
            >
              <div
                className="accordion-header"
                role="button"
                tabIndex={0}
                aria-expanded={openIndex === index}
                onClick={() => toggle(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    toggle(index)
                  }
                }}
              >
                <span>{item.question}</span>
                <ChevronDownIcon
                  width={20}
                  height={20}
                  style={{
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    color: '#E74A30',
                    flexShrink: 0,
                  }}
                />
              </div>
              <div
                className="accordion-body"
                style={{
                  maxHeight: openIndex === index ? '300px' : '0px',
                  overflow: 'hidden',
                  transition: 'max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <div className="accordion-body-inner">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
