import React from 'react'
import styled from 'styled-components'

const StyledMoreAlt = styled.i`
  & {
    transform: scale(var(--ggs, 1));
  }
  &,
  &::after,
  &::before {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 4px;
    height: 4px;
    background: currentColor;
    border-radius: 100%;
  }
  &::after,
  &::before {
    content: '';
    position: absolute;
    top: 0;
  }
  &::after {
    left: -6px;
  }
  &::before {
    right: -6px;
  }
`

export const MoreAlt = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledMoreAlt {...props} ref={ref} />
    </>
  )
})
