import React from 'react'
import styled from 'styled-components'

const StyledEditShadows = styled.i`
  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border:2px solid transparent;box-shadow:0 0 0 2px;border-radius:100px;overflow:hidden}&::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:14px;right:0;top:-1px;background:repeating-linear-gradient( to bottom,currentColor, currentColor 2px,transparent 0px, transparent 3px)}&::after{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:14px;left:0;background:currentColor}
` 

export const EditShadows = React.forwardRef<HTMLElement, React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>>((props, ref) => {
  return (
    <>
      <StyledEditShadows {...props} ref={ref} />
    </>
  )
})
