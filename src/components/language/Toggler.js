import React from 'react'

import { PrimaryButton } from "components/misc/Buttons.js";
import { toggleLanguage } from 'helpers/toggleLanguage';
import { useSearchParams } from "react-router-dom";



export const Toggler = () => {
  const [, setSearchParams] = useSearchParams({});


  const setQueryParamLanguage = (e) => {
    e === 'english' ?
    setSearchParams({})
    : setSearchParams({lang:e})
  }

  return (
    <div>
      Change your language
      <PrimaryButton
        onClick={() => toggleLanguage(setQueryParamLanguage)}
      >
        This is Button
      </PrimaryButton>
    </div>
  )
}