import "./friendsOnProfilePage.css"
export default function Friends({ user }) {
    return (
    <li className="rightbarFriend">
        <img src={user.profilePicture} alt="" className="rightbarFriendImage" />
        <span className="rightbarFriendName">{user.username}</span>
    </li>
    )
}