import React from 'react'
import styled from 'styled-components'

const StyledWebcam = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 8px;
    height: 8px;
    border: 2px solid transparent;
    box-shadow: 0 0 0 2px, inset 0 0 0 2px;
    border-radius: 100px;
    margin-top: -4px;
  }
  &::after {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 10px;
    height: 4px;
    border-right: 4px solid transparent;
    box-shadow: 0 2px 0, inset -2px 0 0;
    bottom: -6px;
    left: -3px;
  }
`

export const Webcam = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledWebcam {...props} ref={ref} />
    </>
  )
})
