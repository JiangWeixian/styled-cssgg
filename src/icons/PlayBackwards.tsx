import React from 'react'
import styled from 'styled-components'

const StyledPlayBackwards = styled.i`
  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:3px;height:10px;background:currentColor}&::after,&::before{content:"";display:block;box-sizing:border-box;position:absolute;width:0;height:10px;border-top:5px solid transparent;border-bottom:5px solid transparent;border-right:6px solid;right:-7px}&::before{right:-14px}
` 

export const PlayBackwards = React.forwardRef<HTMLElement, React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>>((props, ref) => {
  return (
    <>
      <StyledPlayBackwards {...props} ref={ref} />
    </>
  )
})
