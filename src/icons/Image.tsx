import React from 'react'
import styled from 'styled-components'

const StyledImage = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 20px;
    height: 16px;
    overflow: hidden;
    box-shadow: 0 0 0 2px;
    border-radius: 2px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    border: 2px solid;
  }
  &::after {
    transform: rotate(45deg);
    border-radius: 3px;
    width: 16px;
    height: 16px;
    top: 9px;
    left: 6px;
  }
  &::before {
    width: 6px;
    height: 6px;
    border-radius: 100%;
    top: 2px;
    left: 2px;
  }
`

export const Image = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledImage {...props} ref={ref} />
    </>
  )
})
