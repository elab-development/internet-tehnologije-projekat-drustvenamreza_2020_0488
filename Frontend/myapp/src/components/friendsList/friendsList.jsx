import "./friendsList.css"
export default function FriendsList({user}) {
    return (
        <li className="leftBarFriend">
            <img src={user.profilePicture} alt="" className="leftBarFriendImage" />
            <span className="leftBarFriendName">{user.username}</span>
        </li>
    )
}
