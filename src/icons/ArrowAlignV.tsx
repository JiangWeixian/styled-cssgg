import React from 'react'
import styled from 'styled-components'

const StyledArrowAlignV = styled.i`
  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:10px;height:20px;background:linear-gradient(to left,currentColor 15px,transparent 0)no-repeat 4px 2px/2px 6px,linear-gradient(to left,currentColor 15px,transparent 0)no-repeat 4px 12px/2px 6px,linear-gradient(to left,currentColor 15px,transparent 0)no-repeat center/10px 2px } &::after, &::before{content:"";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;transform:rotate(-45deg);left:2px } &::after{border-bottom:2px solid;border-left:2px solid;bottom:1px } &::before{border-top:2px solid;border-right:2px solid;top:1px }
` 

export const ArrowAlignV = React.forwardRef<HTMLElement, React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>>((props, ref) => {
  return (
    <>
      <StyledArrowAlignV {...props} ref={ref} />
    </>
  )
})
