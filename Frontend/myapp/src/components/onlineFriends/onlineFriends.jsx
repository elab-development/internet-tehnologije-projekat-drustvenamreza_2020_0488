import "./onlineFriends.css"
export default function OnlineFriends({user}) {
    return (
        <li className="rightbarFriend">
            <div className="profileIconOnlineFriend">
                <img src={user.profilePicture} alt="" className="profilePictureOnlineFriend" />
                <span className="onlineFriendBadge"></span>
            </div>
            <span className="rightbarOnlineFriendUsername">{user.username}</span>
        </li>
    )
}



