export const setLanguageInitial = () => {
  const currentVal = localStorage.getItem("language")

  if (!currentVal) {
    localStorage.setItem("language", "english")
    return
  }
}

export const toggleLanguage = (cb) => {
  const currentVal = localStorage.getItem("language")

  if (currentVal === "english") {
    localStorage.setItem("language", "spanish")
    cb && cb("spanish")
  }

  if (currentVal === "spanish") {
    localStorage.setItem("language", "english")
    cb && cb("english")
  }
}