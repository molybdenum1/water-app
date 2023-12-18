// import React from 'react

import PropTypes from "prop-types";

import "./Breadcrumbs.css";

const Breadcrumbs = (props) => {
  const { title } = props;
  return (
    <div className="breadcrumbs-wrapper">
      <div className="breadcrumbs">
        <span>Home</span> / <span>{title}</span>
      </div>
    </div>
  );
};

export default Breadcrumbs;

Breadcrumbs.propTypes = {
  title: PropTypes.string.isRequired,
};
