import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './Statistics.module.css'

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

const Statistics = ({ title, stats }) => (
  <section className={clsx(css.statistics)}>
    {title && <h2 className={clsx(css.title)}>{title}</h2>}

    <ul className={clsx(css.statList)}>
      {stats.map(({id, label, percentage}) => (
        <li key={id} className={clsx(css.item)} style={{backgroundColor: getRandomHexColor()}}>
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
