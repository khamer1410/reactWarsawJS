import React from 'react';
import PropTypes from 'prop-types';   //osobna biblioteka ktora sie wydzielila = definiuje wszystkie props prop.types.number name itp

const TransactionCard = ({ item: { description, value, date, category, id }, onRemoveTransaction}) => (
  <div className="Transaction-card">
    <h1>{description}</h1>
    <h2>{value} zl</h2>
    <div className="Transaction-card__metadata">
      <span>{date}</span>
      <span>{category}</span>
    </div>
    <button onClick={onRemoveTransaction}>X</button>  
  </div>
);

TransactionCard.propTypes = {
  item: PropTypes.object.isRequired
};

export default TransactionCard;

