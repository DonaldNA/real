import React from 'react'
import { useGetLanguageQueryParam } from 'helpers/languageHooks'
import LANGUAGE from 'constants/language'

export const DualLanguage = ({children}) => {
  const val = useGetLanguageQueryParam()

  return val === LANGUAGE.SPANISH_ABBR ?
    <>{children.filter(x => x.type.name === "Spanish")}</> :
    <>{children.filter(x => x.type.name === "English")}</>
}
