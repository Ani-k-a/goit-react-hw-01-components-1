import PropTypes from "prop-types";
import clsx from "clsx";
import css from './FriendListItem.module.css'

const FriendListItem = ({ id, avatar, name, isOnline }) => (
  <li key={id} className={clsx(css.item)}>
    <span className={clsx(css.status)}></span>
    <img className={clsx(css.avatar)} src={avatar} alt="User avatar" width="48" />
    <p className={clsx(css.name)}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
    id: PropTypes.number, 
    avatar: PropTypes.string, 
    name: PropTypes.string, 
    isOnline: PropTypes.bool
}

export default FriendListItem;
