import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { SessionProvider } from 'next-auth/react'
import '../lib/dayjs'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../lib/react-query'
import { DefaultSeo } from 'next-seo'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const { session, ...restPage } = pageProps

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <DefaultSeo
          openGraph={{
            type: 'website',
            locale: 'pt_BR',
            url: 'https://',
            siteName: 'Ignite Call',
          }}
        />
        <Component {...restPage} />
      </SessionProvider>
    </QueryClientProvider>
  )
}
