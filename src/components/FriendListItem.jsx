import PropTypes from "prop-types";

const FriendListItem = ({ id, avatar, name, isOnline }) => (
  <li key={id} class="item">
    <span class="status"></span>
    <img class="avatar" src={avatar} alt="User avatar" width="48" />
    <p class="name">{name}</p>
  </li>
);

FriendListItem.propTypes = {
    id: PropTypes.number, 
    avatar: PropTypes.string, 
    name: PropTypes.string, 
    isOnline: PropTypes.bool
}

export default FriendListItem;
