import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

function getStripe() {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('STRIPE_SECRET_KEY is not set')
  }
  return new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2026-02-25.clover',
  })
}

export async function POST(request: NextRequest) {
  try {
    const stripe = getStripe()
    const body = await request.json()
    const { amount, donationType, email, name } = body

    if (!amount || amount < 1) {
      return NextResponse.json({ error: 'Invalid donation amount' }, { status: 400 })
    }

    const origin = request.headers.get('origin') || 'https://unsvcc.org'

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: donationType === 'monthly' ? 'subscription' : 'payment',
      customer_email: email || undefined,
      line_items: [
        {
          price_data: {
            currency: 'cad',
            product_data: {
              name: `UNSVCC ${donationType === 'monthly' ? 'Monthly' : 'One-Time'} Donation`,
              description: 'United Senior Citizen Voice for Change Coalition',
            },
            unit_amount: Math.round(amount * 100),
            ...(donationType === 'monthly' && { recurring: { interval: 'month' } }),
          },
          quantity: 1,
        },
      ],
      metadata: {
        donor_name: name || '',
        donation_type: donationType,
      },
      success_url: `${origin}/donate?status=success`,
      cancel_url: `${origin}/donate?status=cancelled`,
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('Stripe checkout error:', err)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
