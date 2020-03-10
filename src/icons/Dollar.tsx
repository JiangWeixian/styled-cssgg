import React from 'react'
import styled from 'styled-components'

const StyledDollar = styled.i`
  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:2px;height:20px;background:currentColor}&::after,&::before{content:"";display:block;box-sizing:border-box;position:absolute;width:10px;height:8px;border:2px solid}&::before{border-right:0;border-top-left-radius:100px;border-bottom-left-radius:100px;top:3px;left:-6px;box-shadow:4px -2px 0 -2px}&::after{border-left:0;border-top-right-radius:100px;border-bottom-right-radius:100px;bottom:3px;right:-6px;box-shadow:-4px 2px 0 -2px}
` 

export const Dollar = React.forwardRef<HTMLElement, React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>>((props, ref) => {
  return (
    <>
      <StyledDollar {...props} ref={ref} />
    </>
  )
})
