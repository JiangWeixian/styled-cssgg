import React from 'react'
import styled from 'styled-components'

const StyledDice6 = styled.i`
  
` 

export const Dice6 = React.forwardRef<HTMLElement, React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>>((props, ref) => {
  return (
    <>
      <StyledDice6 {...props} ref={ref} />
    </>
  )
})
