import { useEffect } from "react"
import { setLanguageInitial } from "./toggleLanguage"

function useInitiateLanguage() {
  useEffect(() => {
    setLanguageInitial()
  },[])
}

export default useInitiateLanguage