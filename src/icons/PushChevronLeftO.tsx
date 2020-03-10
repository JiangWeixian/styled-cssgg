import React from 'react'
import styled from 'styled-components'

const StyledPushChevronLeftO = styled.i`
  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid;border-radius:100px}&::after,&::before{content:"";display:block;box-sizing:border-box;position:absolute;width:2px;height:8px;border-left:2px solid;top:5px;left:5px}&::after{width:6px;height:6px;border-bottom:2px solid;transform:rotate(45deg);left:9px;top:6px}
` 

export const PushChevronLeftO = React.forwardRef<HTMLElement, React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>>((props, ref) => {
  return (
    <>
      <StyledPushChevronLeftO {...props} ref={ref} />
    </>
  )
})
