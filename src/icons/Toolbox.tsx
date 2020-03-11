import React from 'react'
import styled from 'styled-components'

const StyledToolbox = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 22px;
    height: 16px;
    border: 2px solid;
    border-radius: 2px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
  }
  &::before {
    border: 2px solid;
    border-bottom: 0;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    left: 4px;
    width: 10px;
    height: 4px;
    top: -5px;
  }
  &::after {
    width: 18px;
    height: 2px;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    box-shadow: 0 -2px 0, inset 4px 0 0, inset -4px 0 0;
    top: 4px;
  }
`

export const Toolbox = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledToolbox {...props} ref={ref} />
    </>
  )
})
