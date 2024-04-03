import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const AlertWrapper = styled.div`
  ${tw`p-3 rounded`}

  ${props => props.$primary ? tw`bg-green-500` : tw`bg-red-500`}
`

// success: boolean
export const AlertMessage = ({message, success = true}) => {

  return (
    <AlertWrapper $primary={success}>{message}</AlertWrapper>
  )
}

