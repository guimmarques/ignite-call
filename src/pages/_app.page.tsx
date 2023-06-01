import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { SessionProvider } from 'next-auth/react'
import '../lib/dayjs'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../lib/react-query'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const { session, ...restPage } = pageProps

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <Component {...restPage} />
      </SessionProvider>
    </QueryClientProvider>
  )
}
