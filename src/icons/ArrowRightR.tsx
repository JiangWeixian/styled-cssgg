import React from 'react'
import styled from 'styled-components'

const StyledArrowRightR = styled.i`
  &{box-sizing:border-box;position:relative;display:block;width:22px;height:22px;border:2px solid;transform:scale(var(--ggs,1));border-radius:4px}&::after,&::before{content:"";display:block;box-sizing:border-box;position:absolute;right:4px}&::after{width:6px;height:6px;border-top:2px solid;border-right:2px solid;transform:rotate(45deg);bottom:6px}&::before{width:10px;height:2px;bottom:8px;background:currentColor}
` 

export const ArrowRightR = React.forwardRef<HTMLElement, React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>>((props, ref) => {
  return (
    <>
      <StyledArrowRightR {...props} ref={ref} />
    </>
  )
})
