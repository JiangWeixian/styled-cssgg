import React from 'react'
import styled from 'styled-components'

const StyledPexels = styled.i`
  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:6px;height:14px;border:2px solid;border-right:0}&::after,&::before{content:"";display:block;box-sizing:border-box;position:absolute}&::before{width:5px;height:10px;border:2px solid;border-top-right-radius:100px;border-bottom-right-radius:100px;border-left:0;right:-5px;top:-2px}&::after{background:currentColor;width:2px;height:6px;bottom:-2px;right:-1px}
` 

export const Pexels = React.forwardRef<HTMLElement, React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>>((props, ref) => {
  return (
    <>
      <StyledPexels {...props} ref={ref} />
    </>
  )
})
