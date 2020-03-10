import React from 'react'
import styled from 'styled-components'

const StyledCap = styled.i`
  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:12px;border:2px solid;border-bottom-color:transparent;border-top-left-radius:100px;border-top-right-radius:100px}&::after,&::before{content:"";display:block;box-sizing:border-box;position:absolute}&::after{border-top:2px solid transparent;border-bottom:2px solid transparent;border-left:4px solid transparent;border-right:4px solid transparent;box-shadow:0 0 0 2px,inset 12px 0 0 0;bottom:-8px;width:18px;height:6px;border-radius:1px;left:-2px}&::before{width:4px;height:4px;background:currentColor;border-radius:2px;left:5px;top:-4px}
` 

export const Cap = React.forwardRef<HTMLElement, React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>>((props, ref) => {
  return (
    <>
      <StyledCap {...props} ref={ref} />
    </>
  )
})
