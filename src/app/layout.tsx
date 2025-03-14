export const metadata = {
  title: 'Rajrani',
  description: 'RajRani takeway',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
