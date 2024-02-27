import LANGUAGE from "constants/language"

// Sets language upon user visiting page
export const setLanguageInitial = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const currentQueryParam = urlParams.get(LANGUAGE.QUERY_PARAM);

  if (currentQueryParam !== LANGUAGE.SPANISH_ABBR ) {
    sessionStorage.setItem(LANGUAGE.LOCAL_STORAGE_VAR,LANGUAGE.ENGLISH_ABBR)
  } else {
    sessionStorage.setItem(LANGUAGE.LOCAL_STORAGE_VAR, LANGUAGE.SPANISH_ABBR )
  }
}

// Toggles local storage and passes in new toggled value to CB
export const toggleLanguage = (cb) => {
  const currentVal = sessionStorage.getItem(LANGUAGE.LOCAL_STORAGE_VAR)

  if (currentVal === LANGUAGE.ENGLISH_ABBR) {
    sessionStorage.setItem(LANGUAGE.LOCAL_STORAGE_VAR, LANGUAGE.SPANISH_ABBR)
    cb && cb(LANGUAGE.SPANISH_ABBR)
    return
  }

  if (currentVal === LANGUAGE.SPANISH_ABBR) {
    sessionStorage.setItem(LANGUAGE.LOCAL_STORAGE_VAR, LANGUAGE.ENGLISH_ABBR)
    cb && cb(LANGUAGE.ENGLISH_ABBR)
    return
  }
}
