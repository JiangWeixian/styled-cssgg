import React from 'react'
import styled from 'styled-components'

const StyledBackspace = styled.i`
  &{box-sizing:border-box;position:relative;display:block;width:14px;height:14px;transform:scale(var(--ggs,1));border:2px solid;border-left:0;border-top-right-radius:2px;border-bottom-right-radius:2px}&::after,&::before{content:"";display:block;box-sizing:border-box;position:absolute}&::before{background:linear-gradient( to left,currentColor 18px,transparent 0)no-repeat center center/10px 2px;border-right:3px solid transparent;box-shadow:inset 0 0 0 2px;right:2px;bottom:1px;width:8px;height:8px;border-left:3px solid transparent;transform:rotate(45deg)}&::after{width:10px;height:10px;border-top:2px solid;border-left:2px solid;border-top-left-radius:1px;transform:rotate(-45deg);top:0;left:-5px}
` 

export const Backspace = React.forwardRef<HTMLElement, React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>>((props, ref) => {
  return (
    <>
      <StyledBackspace {...props} ref={ref} />
    </>
  )
})
