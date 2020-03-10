import React from 'react'
import styled from 'styled-components'

const StyledGift = styled.i`
  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:14px;margin-top:8px;border:2px solid transparent;box-shadow:inset 2px 0 0,inset -2px 0 0,0 -2px 0,inset 0 2px 0,inset 0 -2px 0;background:linear-gradient(to left,currentColor 10px,transparent 0),linear-gradient(to left,currentColor 10px,transparent 0),linear-gradient(to left,currentColor 10px,transparent 0);background-repeat:no-repeat;background-size:2px 10px,2px 10px,2px 10px;background-position:8px 0,18px -8px,-2px -8px}&::after,&::before{content:"";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:6px;height:8px;border:2px solid;top:-10px}&::after{left:3px;transform:rotate(-45deg)}&::before{right:3px;transform:rotate(45deg)}
` 

export const Gift = React.forwardRef<HTMLElement, React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>>((props, ref) => {
  return (
    <>
      <StyledGift {...props} ref={ref} />
    </>
  )
})
