import { __assign, __makeTemplateObject } from "tslib";
import React from 'react';
import styled from 'styled-components';
var StyledSpinner = styled.i(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  &{transform:scale(var(--ggs,1))}&,&::after,&::before{box-sizing:border-box;position:relative;display:block;width:20px;height:20px}&::after,&::before{content:\"\";position:absolute;border-radius:100px}&::before{animation:spinner 1s cubic-bezier(.6,0,.4,1) infinite;border:3px solid transparent;border-top-color:currentColor}&::after{border:3px solid;opacity:.2}@keyframes spinner{0%{transform:rotate(0deg) } to{transform:rotate(359deg) }}\n"], ["\n  &{transform:scale(var(--ggs,1))}&,&::after,&::before{box-sizing:border-box;position:relative;display:block;width:20px;height:20px}&::after,&::before{content:\"\";position:absolute;border-radius:100px}&::before{animation:spinner 1s cubic-bezier(.6,0,.4,1) infinite;border:3px solid transparent;border-top-color:currentColor}&::after{border:3px solid;opacity:.2}@keyframes spinner{0%{transform:rotate(0deg) } to{transform:rotate(359deg) }}\n"])));
export var Spinner = React.forwardRef(function (props, ref) {
    return (React.createElement(React.Fragment, null,
        React.createElement(StyledSpinner, __assign({}, props, { ref: ref }))));
});
var templateObject_1;
//# sourceMappingURL=Spinner.js.map