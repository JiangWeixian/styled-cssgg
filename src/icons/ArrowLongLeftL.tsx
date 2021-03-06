import React from 'react'
import styled from 'styled-components'

const StyledArrowLongLeftL = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;
    box-shadow: inset 0 0 0 2px;
    width: 24px;
    height: 6px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
  }
  &::after {
    width: 6px;
    height: 6px;
    border-bottom: 2px solid;
    border-left: 2px solid;
    transform: rotate(45deg);
    left: 0;
    bottom: -2px;
  }
  &::before {
    width: 2px;
    height: 6px;
    background: currentColor;
    right: -1px;
    bottom: -2px;
  }
`

export const ArrowLongLeftL = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledArrowLongLeftL {...props} ref={ref} />
    </>
  )
})
