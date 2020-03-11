import React from 'react'
import styled from 'styled-components'

const StyledSmartphoneChip = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 16px;
    height: 16px;
    border: 6px double;
    border-radius: 3px;
  }
  &::after {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    border-radius: 3px;
    width: 2px;
    height: 2px;
    left: -3px;
    top: -9px;
    background: currentColor;
    box-shadow: 4px 0 0, 8px 0 0, 0 20px 0, 4px 20px 0, -6px 6px 0, 14px 6px 0, 14px 10px 0,
      14px 14px 0, -6px 10px 0, -6px 14px 0, 8px 20px 0;
  }
`

export const SmartphoneChip = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledSmartphoneChip {...props} ref={ref} />
    </>
  )
})
