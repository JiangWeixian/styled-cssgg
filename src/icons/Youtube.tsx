import React from 'react'
import styled from 'styled-components'

const StyledYoutube = styled.i`
  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:10px;box-shadow:0 0 0 2px;border-radius:15px 15px 15px 15px /45px 45px 45px 45px}&::before{content:"";display:block;box-sizing:border-box;position:absolute;left:7px;top:2px;border-left:4px solid currentColor;border-top:3px solid transparent;border-bottom:3px solid transparent}
` 

export const Youtube = React.forwardRef<HTMLElement, React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>>((props, ref) => {
  return (
    <>
      <StyledYoutube {...props} ref={ref} />
    </>
  )
})
