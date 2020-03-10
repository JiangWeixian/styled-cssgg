import React from 'react'
import styled from 'styled-components'

const StyledChevronDoubleRight = styled.i`
  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px}&::after,&::before{content:"";display:block;box-sizing:border-box;position:absolute;width:8px;height:8px;border-right:2px solid;border-top:2px solid;transform:rotate(45deg);top:7px;right:6px}&::after{right:11px}
` 

export const ChevronDoubleRight = React.forwardRef<HTMLElement, React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>>((props, ref) => {
  return (
    <>
      <StyledChevronDoubleRight {...props} ref={ref} />
    </>
  )
})
