import PropTypes from "prop-types";
import css from "./FriendList.module.css";

function FriendList({ friends }) {
  return (
    <ul className={css['friend-list']}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className={isOnline
          ? `${css.item} ${css.online} "online"`
          : `${css.item} ${css.offline} "offline"`
        }>
          <span className={css.status}>{isOnline}</span>
          <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
          <p className={css.name}>{name}</p>
        </li>
      ))}
    </ul>
  )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired
}

export default FriendList;