import PropTypes from "prop-types";
import clsx from "clsx";
import css from "./TransactionHistory.module.css"

const TransactionHistory = ({items}) =>(
<table className={clsx(css.transactionHistory)}>
  <thead className={clsx(css.header)}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(({id, type, amount, currency}) => (
        <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
    ))}
  </tbody>
</table>
);

TransactionHistory.propTypes = {
    key: PropTypes.number,
    type: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.string
}

export default TransactionHistory;
