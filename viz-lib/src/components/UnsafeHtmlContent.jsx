import React from "react";
import PropTypes from "prop-types";

const HtmlContent = React.memo(function HtmlContent({ children, ...props }) {
  return (
    <div
      {...props}
      dangerouslySetInnerHTML={{ __html: children }} // eslint-disable-line react/no-danger
    />
  );
});

HtmlContent.propTypes = {
  children: PropTypes.string,
};

HtmlContent.defaultProps = {
  children: "",
};

export default HtmlContent;
