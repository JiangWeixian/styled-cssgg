import React from 'react'
import styled from 'styled-components'

const StyledGirl = styled.i`
  &,&::after,&::before{display:block;box-sizing:border-box;border-radius:42px}&{position:relative;transform:scale(var(--ggs,1));width:20px;height:20px;overflow:hidden;box-shadow:inset 0 0 0 2px}&::after,&::before{content:"";position:absolute;width:2px;height:2px;background:currentColor;box-shadow:6px 0 0;left:6px;top:10px}&::after{width:20px;height:20px;top:-11px;left:-12px;box-shadow:17px -4px 0 3px}
` 

export const Girl = React.forwardRef<HTMLElement, React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>>((props, ref) => {
  return (
    <>
      <StyledGirl {...props} ref={ref} />
    </>
  )
})
