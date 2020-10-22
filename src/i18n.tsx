import * as React from 'react'
import { IntlProvider } from 'react-intl'
// Langs
import jaMessage from './lang/ja.json'
import enMessage from './lang/en.json'

type Props = {
  children: any
}

const I18nProvider = ({ children }: Props) => {
  const locale = 'ja'
  const messages = locale === 'ja' ? jaMessage : enMessage

  // Note: Todo => Switch locale

  return (
    <IntlProvider defaultLocale="ja" locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  )
}

export default I18nProvider
