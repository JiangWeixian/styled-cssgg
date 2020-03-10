import React from 'react'
import styled from 'styled-components'

const StyledPushChevronRightR = styled.i`
  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid;border-radius:4px}&::after,&::before{content:"";display:block;box-sizing:border-box;position:absolute;width:2px;height:8px;border-right:2px solid;top:5px;right:5px}&::after{width:6px;height:6px;border-bottom:2px solid;transform:rotate(-45deg);right:9px;top:6px}
` 

export const PushChevronRightR = React.forwardRef<HTMLElement, React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>>((props, ref) => {
  return (
    <>
      <StyledPushChevronRightR {...props} ref={ref} />
    </>
  )
})
