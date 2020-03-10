import React from 'react'
import styled from 'styled-components'

const StyledTag = styled.i`
  &,&::before{display:block;border:2px solid}&{border-right:0;border-top-left-radius:3px;border-bottom-left-radius:3px;box-sizing:border-box;transform:scale(var(--ggs,1));position:relative;width:19px;height:14px}&::before{content:"";position:absolute;width:2px;height:2px;box-sizing:content-box;border-radius:100px;right:0;top:2px}&::after{content:"";display:block;box-sizing:border-box;position:absolute;width:10px;height:10px;border-bottom:2px solid;border-right:2px solid;border-bottom-right-radius:4px;transform:rotate(-45deg);top:0;right:-5px}
` 

export const Tag = React.forwardRef<HTMLElement, React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>>((props, ref) => {
  return (
    <>
      <StyledTag {...props} ref={ref} />
    </>
  )
})
