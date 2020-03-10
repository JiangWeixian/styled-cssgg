import React from 'react'
import styled from 'styled-components'

const StyledGym = styled.i`
  &{box-sizing:border-box;position:relative;display:block;transform:rotate(-35deg) scale(var(--ggs,1));width:8px;height:20px;border-top:9px solid transparent;border-bottom:9px solid transparent;box-shadow:inset 0 0 0 2px}&::after,&::before{content:"";display:block;box-sizing:border-box;position:absolute}&::before{box-shadow:-3px 0 0 -1px,3px 0 0 -1px,inset 2px 0 0 0,inset -2px 0 0 0;width:14px;height:8px;border-left:1px solid transparent;border-right:1px solid transparent;top:-3px;left:-3px}&::after{width:22px;height:2px;border-left:2px solid;border-right:2px solid;top:0;left:-7px}
` 

export const Gym = React.forwardRef<HTMLElement, React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>>((props, ref) => {
  return (
    <>
      <StyledGym {...props} ref={ref} />
    </>
  )
})
