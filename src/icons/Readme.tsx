import React from 'react'
import styled from 'styled-components'

const StyledReadme = styled.i`
  & {
    display: block;
    position: relative;
    box-sizing: border-box;
    transform: scale(var(--ggs, 1));
    width: 2px;
    height: 17px;
    border-bottom: 4px solid;
    border-radius: 4px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    position: absolute;
    box-sizing: border-box;
    width: 8px;
    height: 12px;
    box-shadow: 0 0 0 2px;
    border-radius: 1px;
    bottom: -1px;
    background: linear-gradient(to left, currentColor 4px, transparent 0) no-repeat center 5px/4px
        2px,
      linear-gradient(to left, currentColor 4px, transparent 0) no-repeat center 2px/4px 2px,
      linear-gradient(to left, currentColor 4px, transparent 0) no-repeat center 8px/4px 2px;
  }
  &::before {
    border-top-right-radius: 3px;
    left: -8px;
  }
  &::after {
    border-top-left-radius: 3px;
    right: -8px;
  }
`

export const Readme = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledReadme {...props} ref={ref} />
    </>
  )
})
