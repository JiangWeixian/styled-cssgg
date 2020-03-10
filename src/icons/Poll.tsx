import React from 'react'
import styled from 'styled-components'

const StyledPoll = styled.i`
  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border:3px solid transparent;border-top:6px solid transparent;box-shadow:0 0 0 2px,inset 2px 0 0;border-radius:1px}&::after,&::before{content:"";display:block;box-sizing:border-box;position:absolute;width:2px;height:10px;background:currentColor;top:-3px;left:4px}&::after{height:4px;top:3px;left:8px}
` 

export const Poll = React.forwardRef<HTMLElement, React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>>((props, ref) => {
  return (
    <>
      <StyledPoll {...props} ref={ref} />
    </>
  )
})
