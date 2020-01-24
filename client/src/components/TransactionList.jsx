import React from 'react';
import TransactionItem from './TransactionItem.jsx';

const TransactionList = ({data}) => {
  return (
    <div className="txn">
      <TransactionItem />
    </div>
  );
};

export default TransactionList;
