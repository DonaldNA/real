import React from 'react'
import { useInEnglish } from 'helpers/languageHooks'

export const DualLanguage = ({children}) => {
  const inEnglish = useInEnglish()

  if(!Array.isArray(children)){ 
    if (inEnglish && children.type.name === "English") return children
    if (!inEnglish && children.type.name === "Spanish") return children
    return <></>
  }

  return inEnglish ?
    <>{children.filter(x => x.type.name === "English")}</> :
    <>{children.filter(x => x.type.name === "Spanish")}</>
}
