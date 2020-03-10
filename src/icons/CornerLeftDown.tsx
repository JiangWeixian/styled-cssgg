import React from 'react'
import styled from 'styled-components'

const StyledCornerLeftDown = styled.i`
  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px}&::after,&::before{content:"";display:block;box-sizing:border-box;position:absolute;bottom:3px}&::after{width:8px;height:8px;border-bottom:2px solid;border-right:2px solid;transform:rotate(45deg);left:3px}&::before{width:12px;height:16px;border-top-left-radius:4px;border-top:2px solid;border-left:2px solid;left:6px}
` 

export const CornerLeftDown = React.forwardRef<HTMLElement, React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>>((props, ref) => {
  return (
    <>
      <StyledCornerLeftDown {...props} ref={ref} />
    </>
  )
})
