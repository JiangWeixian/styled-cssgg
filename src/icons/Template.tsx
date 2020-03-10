import React from 'react'
import styled from 'styled-components'

const StyledTemplate = styled.i`
  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:6px;border:2px solid;margin-top:-14px}&::after,&::before{content:"";display:block;box-sizing:border-box;position:absolute;width:8px;height:10px;top:6px}&::after{border:2px solid;left:-2px}&::before{border-top:6px double;border-bottom:2px solid;right:-2px}
` 

export const Template = React.forwardRef<HTMLElement, React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>>((props, ref) => {
  return (
    <>
      <StyledTemplate {...props} ref={ref} />
    </>
  )
})
