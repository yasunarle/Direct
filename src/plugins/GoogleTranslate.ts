import axios from 'axios'
import { GOOGLE_APP_SCRIPT_URL } from '@env'

// Note: fetch だと xss 的なエラーが出る
const GoogleTranslate = async (text: string, source: string, target: string): Promise<string> => {
  console.log('--- GoogleTranslate ---')

  const translatedText = await axios(GOOGLE_APP_SCRIPT_URL, {
    params: {
      text,
      source,
      target,
    },
  }).then((res) => {
    return res.data
  })

  console.log(translatedText)

  return translatedText
}

export default GoogleTranslate
