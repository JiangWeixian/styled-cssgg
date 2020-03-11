import React from 'react'
import styled from 'styled-components'

const StyledCalculator = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 18px;
    height: 22px;
    border: 2px solid;
    border-radius: 2px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 10px;
    height: 2px;
    background: currentColor;
    top: 2px;
    left: 2px;
  }
  &::after {
    width: 2px;
    box-shadow: 4px 0 0, 8px 0 0, 0 4px 0, 4px 4px 0, 8px 4px 0, 0 8px 0, 4px 8px 0, 8px 8px 0,
      8px 6px 0;
    top: 6px;
  }
`

export const Calculator = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledCalculator {...props} ref={ref} />
    </>
  )
})
