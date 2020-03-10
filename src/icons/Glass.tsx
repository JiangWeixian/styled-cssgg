import React from 'react'
import styled from 'styled-components'

const StyledGlass = styled.i`
  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:6px;height:13px;border-top:8px solid transparent;border-left:2px solid transparent;border-right:2px solid transparent;box-shadow:inset 0 0 0 2px,0 2px 0 0}&::before{content:"";display:block;box-sizing:border-box;position:absolute;width:10px;height:10px;border:2px solid;border-bottom-left-radius:100px;border-bottom-right-radius:100px;left:-4px;bottom:3px}
` 

export const Glass = React.forwardRef<HTMLElement, React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>>((props, ref) => {
  return (
    <>
      <StyledGlass {...props} ref={ref} />
    </>
  )
})
