import React from 'react'
import styled from 'styled-components'

const StyledPlayListCheck = styled.i`
  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:6px;border-top:0 solid transparent;border-bottom:2px solid transparent;box-shadow:inset 0 -2px 0,-2px 4px 0 -2px,0 -2px 0 0}&::after{content:"";display:block;box-sizing:border-box;position:absolute;width:5px;height:8px;border-right:2px solid;border-bottom:2px solid;transform:rotate(45deg);top:2px;right:-4px}
` 

export const PlayListCheck = React.forwardRef<HTMLElement, React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>>((props, ref) => {
  return (
    <>
      <StyledPlayListCheck {...props} ref={ref} />
    </>
  )
})
