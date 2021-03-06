import React from 'react'
import styled from 'styled-components'

const StyledArrowLongDown = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    border-right: 2px solid transparent;
    border-left: 2px solid transparent;
    box-shadow: inset 0 0 0 2px;
    height: 24px;
    width: 6px;
  }
  &::after {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 6px;
    height: 6px;
    border-bottom: 2px solid;
    border-right: 2px solid;
    transform: rotate(45deg);
    bottom: 0;
    left: -2px;
  }
`

export const ArrowLongDown = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledArrowLongDown {...props} ref={ref} />
    </>
  )
})
