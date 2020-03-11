import React from 'react'
import styled from 'styled-components'

const StyledBoy = styled.i`
  &,
  &::after,
  &::before {
    display: block;
    box-sizing: border-box;
    border-radius: 42px;
  }
  & {
    position: relative;
    width: 20px;
    height: 20px;
    transform: scale(var(--ggs, 1));
    overflow: hidden;
    box-shadow: inset 0 0 0 2px;
  }
  &::after,
  &::before {
    content: '';
    position: absolute;
    width: 2px;
    height: 2px;
    background: currentColor;
    box-shadow: 6px 0 0;
    left: 6px;
    top: 10px;
  }
  &::after {
    width: 20px;
    height: 20px;
    top: -13px;
    right: -12px;
  }
`

export const Boy = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledBoy {...props} ref={ref} />
    </>
  )
})
