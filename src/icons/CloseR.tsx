import React from 'react'
import styled from 'styled-components'

const StyledCloseR = styled.i`
  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid;border-radius:4px}&::after,&::before{content:"";display:block;box-sizing:border-box;position:absolute;width:12px;height:2px;background:currentColor;transform:rotate(45deg);border-radius:5px;top:8px;left:3px}&::after{transform:rotate(-45deg)}
` 

export const CloseR = React.forwardRef<HTMLElement, React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>>((props, ref) => {
  return (
    <>
      <StyledCloseR {...props} ref={ref} />
    </>
  )
})
