import React from "react";

const Button = ({ target, url, children, styles }) => {
  return (
    <a href={url} target={target} style={styles}>
      {children}
    </a>
  );
};

export default Button;
