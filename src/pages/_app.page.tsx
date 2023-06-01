import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { SessionProvider } from 'next-auth/react'
import '../lib/dayjs'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const { session, ...restPage } = pageProps

  return (
    <SessionProvider session={session}>
      <Component {...restPage} />
    </SessionProvider>
  )
}
