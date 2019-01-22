import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Button/Button.js
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles, Button } from "@material-ui/core";
export const customStyles = {
  material: {
    color: "#6d6d6d"
  },
  semantic: {
    color: "#4dac3f"
  },
  vault: {
    color: "#3d3d3d"
  }
};

const CuiButton = props => {
  const {
    children,
    classes,
    className: classNameProp,
    themeEngine
  } = props,
        other = _objectWithoutPropertiesLoose(props, ["children", "classes", "className", "themeEngine"]);

  const className = classNames({
    [classes.semantic]: themeEngine === "semantic",
    [classes.vault]: themeEngine === "vault",
    [classes.material]: themeEngine === "material"
  }, classNameProp);
  return React.createElement(Button, _extends({
    className: className
  }, other), children);
};

CuiButton.propTypes = {
  /**
   * The content of the button.
   */
  children: PropTypes.node.isRequired,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * The theme engine of the component. It supports those theme engines that make sense for this component.
   * Default theme is material
   */
  themeEngine: PropTypes.oneOf(["material", "semantic", "vault"])
};
CuiButton.defaultProps = {
  themeEngine: "material"
};
export default withStyles(customStyles)(CuiButton);