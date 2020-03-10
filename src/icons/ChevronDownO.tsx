import React from 'react'
import styled from 'styled-components'

const StyledChevronDownO = styled.i`
  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid;border-radius:100px}&::after{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-bottom:2px solid;border-right:2px solid;transform:rotate(45deg);left:6px;top:5px}
` 

export const ChevronDownO = React.forwardRef<HTMLElement, React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>>((props, ref) => {
  return (
    <>
      <StyledChevronDownO {...props} ref={ref} />
    </>
  )
})
