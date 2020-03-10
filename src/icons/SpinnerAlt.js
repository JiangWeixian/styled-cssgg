import { __assign, __makeTemplateObject } from "tslib";
import React from 'react';
import styled from 'styled-components';
var StyledSpinnerAlt = styled.i(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  @keyframes spinneralt{0%{transform:rotate(0deg) } to{transform:rotate(359deg) }}&{transform:scale(var(--ggs,1))}&,&::before{box-sizing:border-box;position:relative;display:block;width:20px;height:20px}&::before{content:\"\";position:absolute;border-radius:100px;animation:spinneralt 1s cubic-bezier(.6,0,.4,1) infinite;border:3px solid transparent;border-top-color:currentColor}\n"], ["\n  @keyframes spinneralt{0%{transform:rotate(0deg) } to{transform:rotate(359deg) }}&{transform:scale(var(--ggs,1))}&,&::before{box-sizing:border-box;position:relative;display:block;width:20px;height:20px}&::before{content:\"\";position:absolute;border-radius:100px;animation:spinneralt 1s cubic-bezier(.6,0,.4,1) infinite;border:3px solid transparent;border-top-color:currentColor}\n"])));
export var SpinnerAlt = React.forwardRef(function (props, ref) {
    return (React.createElement(React.Fragment, null,
        React.createElement(StyledSpinnerAlt, __assign({}, props, { ref: ref }))));
});
var templateObject_1;
//# sourceMappingURL=SpinnerAlt.js.map