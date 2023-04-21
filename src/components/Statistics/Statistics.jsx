import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './Statistics.module.css'

const Statistics = ({ title, stats }) => (
  <section className={clsx(css.statistics)}>
    {title && <h2 className={clsx(css.title)}>{title}</h2>}

    <ul className={clsx(css.statList)}>
      {stats.map(({id, label, percentage}) => (
        <li key={id} className={clsx(css.item)}>
          <span className={clsx(css.label)}>{label}</span>
          <span className={clsx(css.percentage)}>{percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  id: PropTypes.number,
  tilte: PropTypes.string,
  stats: PropTypes.array
};

export default Statistics;
