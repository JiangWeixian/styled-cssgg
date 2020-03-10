import React from 'react'
import styled from 'styled-components'

const StyledPathExclude = styled.i`
  &{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:14px;height:14px}&::after,&::before{content:"";position:absolute;display:block;box-sizing:border-box;width:10px;height:10px}&::after{border-top:4px solid;border-left:4px solid}&::before{border-right:4px solid;border-bottom:4px solid;bottom:0;right:0}
` 

export const PathExclude = React.forwardRef<HTMLElement, React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>>((props, ref) => {
  return (
    <>
      <StyledPathExclude {...props} ref={ref} />
    </>
  )
})
