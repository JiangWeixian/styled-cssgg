import { __assign, __makeTemplateObject } from "tslib";
import React from 'react';
import styled from 'styled-components';
var StyledLoadbar = styled.i(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  @keyframes loadbar{0%,to{left:0;right:80% } 25%,75%{left:0;right:0 } 50%{left:80%;right:0 }}&,&::before{display:block;box-sizing:border-box;height:4px}&{position:relative;transform:scale(var(--ggs,1));width:18px}&::before{content:\"\";position:absolute;border-radius:4px;background:currentColor;animation:loadbar 2s cubic-bezier(0,0,.58,1) infinite}\n"], ["\n  @keyframes loadbar{0%,to{left:0;right:80% } 25%,75%{left:0;right:0 } 50%{left:80%;right:0 }}&,&::before{display:block;box-sizing:border-box;height:4px}&{position:relative;transform:scale(var(--ggs,1));width:18px}&::before{content:\"\";position:absolute;border-radius:4px;background:currentColor;animation:loadbar 2s cubic-bezier(0,0,.58,1) infinite}\n"])));
export var Loadbar = React.forwardRef(function (props, ref) {
    return (React.createElement(React.Fragment, null,
        React.createElement(StyledLoadbar, __assign({}, props, { ref: ref }))));
});
var templateObject_1;
//# sourceMappingURL=Loadbar.js.map