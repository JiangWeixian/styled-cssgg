import React from 'react'
import styled from 'styled-components'

const StyledScreen = styled.i`
  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:14px;border:2px solid;border-radius:3px;margin-top:-4px}&::after,&::before{content:"";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:10px;height:2px;background:currentColor;top:14px;left:4px}&::before{width:2px;height:6px;top:10px;left:8px}
` 

export const Screen = React.forwardRef<HTMLElement, React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>>((props, ref) => {
  return (
    <>
      <StyledScreen {...props} ref={ref} />
    </>
  )
})
