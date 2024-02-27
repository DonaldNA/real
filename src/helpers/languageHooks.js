import { useEffect } from "react"
import { setLanguageInitial } from "./language"
import { useSearchParams } from "react-router-dom";
import LANGUAGE from "constants/language";

export const useInitiateLanguage = () => {
  useEffect(() => {
    setLanguageInitial()
  },[])
}

export const useGetLanguageQueryParam = () => {
  const [params] = useSearchParams();
  // console.log('getpar;ams', params)
  // console.log('getpar;ams', params.get("lang"))

  return params.get(LANGUAGE.QUERY_PARAM)
}

export const useSetLanguageQueryParam = (language) => {
  const [, setSearchParams] = useSearchParams({});
  setSearchParams({[LANGUAGE.QUERY_PARAM]:language})
}