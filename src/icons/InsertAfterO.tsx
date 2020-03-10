import React from 'react'
import styled from 'styled-components'

const StyledInsertAfterO = styled.i`
  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border:2px solid;border-radius:20px } &::before{box-shadow:-2px 12px 0, 2px 12px 0;} &::after, &::before{content:"";display:block;box-sizing:border-box;position:absolute;width:8px;height:2px;background:currentColor;border-radius:5px;top:5px;left:2px } &::after{width:2px;height:8px;top:2px;left:5px }
` 

export const InsertAfterO = React.forwardRef<HTMLElement, React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>>((props, ref) => {
  return (
    <>
      <StyledInsertAfterO {...props} ref={ref} />
    </>
  )
})
