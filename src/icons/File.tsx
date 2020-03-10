import React from 'react'
import styled from 'styled-components'

const StyledFile = styled.i`
  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:16px;border:2px solid transparent;border-right:0;border-top:0;box-shadow:0 0 0 2px;border-radius:1px;border-top-right-radius:4px;overflow:hidden}&::after{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-left:2px solid;border-bottom:2px solid;right:-1px;top:-1px}
` 

export const File = React.forwardRef<HTMLElement, React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>>((props, ref) => {
  return (
    <>
      <StyledFile {...props} ref={ref} />
    </>
  )
})
