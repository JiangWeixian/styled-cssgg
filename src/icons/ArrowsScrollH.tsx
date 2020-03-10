import React from 'react'
import styled from 'styled-components'

const StyledArrowsScrollH = styled.i`
  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:6px}&::after,&::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;transform:rotate(45deg)}&::after{border-bottom:2px solid;border-left:2px solid;right:0}&::before{border-top:2px solid;border-right:2px solid;left:0}
` 

export const ArrowsScrollH = React.forwardRef<HTMLElement, React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>>((props, ref) => {
  return (
    <>
      <StyledArrowsScrollH {...props} ref={ref} />
    </>
  )
})
