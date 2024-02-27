import React, {useEffect} from 'react'
import { useGetLanguageQueryParam } from 'helpers/languageHooks'

const DualLanguageStr = ({ english, spanish}) => {

  const val = useGetLanguageQueryParam()

  useEffect(() => {
    console.log('this is val', val)
  },[val])

  return (
    <>this is a string</>
  )
}

export default DualLanguageStr