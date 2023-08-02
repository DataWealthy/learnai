import './globals.css'
import { Work_Sans } from 'next/font/google'
import Header from './components/Header'

const work_sans = Work_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Learn AI',
  description: 'LearnAI is your one-stop destination for unlocking the power of Artificial Intelligence (AI). Dive into comprehensive tutorials, resources, and expert guidance to master AI concepts. Join a thriving AI community and contribute to AI safety initiatives. Start your AI journey today and transform your knowledge into real-world impact at LearnAI.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='logo-small.svg' />
      </head>
      <body className={work_sans.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
