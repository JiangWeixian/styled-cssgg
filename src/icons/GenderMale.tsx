import React from 'react'
import styled from 'styled-components'

const StyledGenderMale = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 10px;
    height: 10px;
    border: 2px solid;
    border-radius: 100%;
    margin-left: -4px;
    margin-top: 4px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    height: 8px;
    top: -6px;
  }
  &::after {
    border-right: 2px solid;
    border-top: 2px solid;
    width: 7px;
    height: 7px;
    left: 5px;
  }
  &::before {
    width: 2px;
    background: currentColor;
    left: 7px;
    transform: rotate(45deg);
  }
`

export const GenderMale = React.forwardRef<
  HTMLElement,
  React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledGenderMale {...props} ref={ref} />
    </>
  )
})
