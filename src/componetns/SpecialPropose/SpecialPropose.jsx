// import React from 'react'
import CardList from '../CardList';
import PropTypes from "prop-types";

import './SpecialPropose.css';

const SpecialPropose = (props) => {
  const { products } = props;
  return (
    <div className="spec-propose">
      <h2>
        Special Promotions
      </h2>
      <CardList products={products} />
    </div>
  )
}

SpecialPropose.propTypes = {
  products: PropTypes.array.isRequired,
};

export default SpecialPropose
