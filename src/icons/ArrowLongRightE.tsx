import React from 'react'
import styled from 'styled-components'

const StyledArrowLongRightE = styled.i`
  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border-top:2px solid transparent;border-bottom:2px solid transparent;border-left:4px solid transparent;box-shadow:inset 0 0 0 2px;width:24px;height:6px}&::after,&::before{content:"";display:block;box-sizing:border-box;position:absolute}&::after{width:6px;height:6px;border-top:2px solid;border-right:2px solid;transform:rotate(45deg);right:0;bottom:-2px}&::before{width:6px;height:6px;border:2px solid;left:-4px;bottom:-2px}
` 

export const ArrowLongRightE = React.forwardRef<HTMLElement, React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>>((props, ref) => {
  return (
    <>
      <StyledArrowLongRightE {...props} ref={ref} />
    </>
  )
})