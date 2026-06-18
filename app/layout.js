import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chintan Chikitsa | Deepalli Sharma – Holistic Healer, Sound Healing & NLP Therapy Panchkula India',
  description: 'Deepalli Sharma is a certified Frequency Coach, Shamanic Healer, NLP Master & Sound Therapist in Panchkula, India. Heal anxiety, trauma, stress & more. Book your free 20-min discovery call today.',
  keywords: 'holistic healer Panchkula, sound healing India, NLP therapy Punjab, shamanic healing India, Deepalli Sharma, Chintan Chikitsa',
  openGraph: {
    title: 'Chintan Chikitsa | Deepalli Sharma',
    description: '500+ lives transformed. Shamanic healing, Sound therapy, NLP in Panchkula India.',
    url: 'https://chintan-chikitsa-nine.vercel.app',
    siteName: 'Chintan Chikitsa',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
