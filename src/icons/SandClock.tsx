import React from 'react'
import styled from 'styled-components'

const StyledSandClock = styled.i`
  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:20px;border-top:2px solid;border-bottom:2px solid}&::after,&::before{content:"";display:block;box-sizing:border-box;position:absolute}&::before{border-top-left-radius:14px;border-top-right-radius:14px;bottom:-2px;width:10px;height:10px;border:2px solid;left:1px}&::after{width:6px;height:6px;border:2px solid transparent;border-bottom-left-radius:14px;border-bottom-right-radius:14px;top:0;left:3px;box-shadow:0 0 0 2px,inset 2px 0 0}
` 

export const SandClock = React.forwardRef<HTMLElement, React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>>((props, ref) => {
  return (
    <>
      <StyledSandClock {...props} ref={ref} />
    </>
  )
})
