import React from 'react'
import styled from 'styled-components'

const StyledOrganisation = styled.i`
  & {
    background: linear-gradient(to bottom, currentColor 5px, transparent 0) no-repeat center 2px/12px
        2px,
      linear-gradient(to bottom, currentColor 5px, transparent 0) no-repeat center 6px/12px 2px,
      linear-gradient(to bottom, currentColor 5px, transparent 0) no-repeat center 10px/12px 2px,
      linear-gradient(to bottom, currentColor 18px, transparent 0) no-repeat center/2px 18px;
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 12px;
    height: 18px;
    border: 2px solid;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
  }
  &::before {
    background: currentColor;
    right: -8px;
    top: 6px;
    box-shadow: 0 4px 0, -4px 4px 0, -4px 0 0;
    width: 2px;
    height: 2px;
  }
  &::after {
    width: 12px;
    height: 14px;
    border: 2px solid;
    left: 8px;
    bottom: -2px;
  }
`

export const Organisation = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledOrganisation {...props} ref={ref} />
    </>
  )
})
