import { useInEnglish } from 'helpers/languageHooks'

export const DualLanguage = ({english, spanish}) => {
  const inEnglish = useInEnglish()

  return inEnglish ?
    english :
    spanish
}
