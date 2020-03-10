import React from 'react'
import styled from 'styled-components'

const StyledArrowLongUp = styled.i`
  &,&::after{display:block;box-sizing:border-box;width:6px}&{position:relative;transform:scale(var(--ggs,1));border-right:2px solid transparent;border-left:2px solid transparent;box-shadow:inset 0 0 0 2px;height:24px}&::after{content:"";position:absolute;height:6px;border-top:2px solid;border-left:2px solid;transform:rotate(45deg);top:0;left:-2px}
` 

export const ArrowLongUp = React.forwardRef<HTMLElement, React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>>((props, ref) => {
  return (
    <>
      <StyledArrowLongUp {...props} ref={ref} />
    </>
  )
})
