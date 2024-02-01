import "./rightbar.css"
export default function Rightbar() {
    return (
        <div className="rightBar">
            <div className="rightbarWrapp">
                <div className="birthdayNotification">
                    <img src="/assets/gift3.png" alt="" className="birthdayImage"/>
                    <span className="birthdayText">
                        <b>+2 ljudi</b> je rodjeno istog dana
                    </span>
                </div>
                <img src="/assets/ad.png" alt=""className="AdImage" />
                <h4 className="rightbarTitle">Online prijatelji</h4>
                <ui className="rightbarOnlineFriendList">
                    <li className="rightbarFriend">
                        <div className="profileIconOnlineFriend">
                            <img src="/assets/profilePictures/4.jpeg" alt="" className="profilePictureOnlineFriend"/>
                            <span className="onlineFriendBadge"></span>
                        </div>
                        <span className="rightbarOnlineFriendUsername">Lena Markovic</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="profileIconOnlineFriend">
                            <img src="/assets/profilePictures/4.jpeg" alt="" className="profilePictureOnlineFriend"/>
                            <span className="onlineFriendBadge"></span>
                        </div>
                        <span className="rightbarOnlineFriendUsername">Lena Markovic</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="profileIconOnlineFriend">
                            <img src="/assets/profilePictures/4.jpeg" alt="" className="profilePictureOnlineFriend"/>
                            <span className="onlineFriendBadge"></span>
                        </div>
                        <span className="rightbarOnlineFriendUsername">Lena Markovic</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="profileIconOnlineFriend">
                            <img src="/assets/profilePictures/4.jpeg" alt="" className="profilePictureOnlineFriend"/>
                            <span className="onlineFriendBadge"></span>
                        </div>
                        <span className="rightbarOnlineFriendUsername">Lena Markovic</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="profileIconOnlineFriend">
                            <img src="/assets/profilePictures/4.jpeg" alt="" className="profilePictureOnlineFriend"/>
                            <span className="onlineFriendBadge"></span>
                        </div>
                        <span className="rightbarOnlineFriendUsername">Lena Markovic</span>
                    </li>
                </ui>
            </div>
        </div>
    )
}