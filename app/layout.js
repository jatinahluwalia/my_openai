import './globals.css'

export const metadata = {
  title: 'Jitu AI',
  description: 'Generated by Jitu',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
