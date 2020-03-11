import React from 'react'
import styled from 'styled-components'

const StyledEditExposure = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 16px;
    height: 16px;
    border: 2px solid transparent;
    box-shadow: 0 0 0 2px;
    border-radius: 100px;
    overflow: hidden;
  }
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 6px;
    height: 8px;
    border-top: 2px solid;
    border-bottom: 2px solid;
    left: 3px;
    top: 3px;
  }
  &::after {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 2px;
    height: 6px;
    background: currentColor;
    left: 5px;
    top: 1px;
  }
`

export const EditExposure = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledEditExposure {...props} ref={ref} />
    </>
  )
})
