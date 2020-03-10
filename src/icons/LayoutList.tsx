import React from 'react'
import styled from 'styled-components'

const StyledLayoutList = styled.i`
  &{transform:scale(var(--ggs,1))}&,&::after,&::before{box-sizing:border-box;position:relative;display:block;width:10px;height:2px;border-left:6px double;border-right:4px solid}&::after,&::before{content:"";position:absolute;left:-6px}&::after{bottom:4px}&::before{top:4px}
` 

export const LayoutList = React.forwardRef<HTMLElement, React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>>((props, ref) => {
  return (
    <>
      <StyledLayoutList {...props} ref={ref} />
    </>
  )
})
