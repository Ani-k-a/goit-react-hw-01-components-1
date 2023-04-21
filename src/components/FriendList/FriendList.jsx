import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem';
import clsx from 'clsx';
import css from "./FriendList.module.css";

const FriendList = ({friends}) => (
  <ul className={clsx(css.friendList)} >
    {friends.map(friend => (
      <FriendListItem
        id={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    ))}
  </ul>
);

FriendList.prototype = {
    friends: PropTypes.array
}
export default FriendList;
