import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

const FriendList = ({friends}) => (
  <ul class="friend-list">
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
