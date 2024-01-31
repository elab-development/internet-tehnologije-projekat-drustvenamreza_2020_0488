import "./leftbar.css"
import { RssFeed, Chat, PlayCircleFilledOutlined, Group, Bookmark, HelpOutline, WorkOutline, Event, School } from "@mui/icons-material"
export default function Leftbar() {
    return (
        <div className="leftBar">
            <div className="leftBarWrapp">
                <ul className="leftBarList">
                    <li className="leftBarItem">
                        <RssFeed className="feedIcon" />
                        <span className="leftBarIconText">Objave</span>
                    </li>
                    <li className="leftBarItem">
                        <Chat className="feedIcon"/>
                        <span className="leftBarIconText">Poruke</span>
                    </li>
                    <li className="leftBarItem">
                        <PlayCircleFilledOutlined className="feedIcon" />
                        <span className="leftBarIconText">Video</span>
                    </li>
                    <li className="leftBarItem">
                        <Group className="feedIcon" />
                        <span className="leftBarIconText">Grupe</span>
                    </li>
                    <li className="leftBarItem">
                        <Bookmark className="feedIcon" />
                        <span className="leftBarIconText">Sacuvano</span>
                    </li>
                    <li className="leftBarItem">
                        <HelpOutline className="feedIcon" />
                        <span className="leftBarIconText">Pitanja</span>
                    </li>
                    <li className="leftBarItem">
                        <WorkOutline className="feedIcon" />
                        <span className="leftBarIconText">Poslovi</span>
                    </li>
                    <li className="leftBarItem">
                        <Event className="feedIcon" />
                        <span className="leftBarIconText">Dogadjaji</span>
                    </li>
                    <li className="leftBarItem">
                        <School className="feedIcon" />
                        <span className="leftBarIconText">Kursevi</span>
                    </li>
                </ul>
                <button className="leftBarButton">Prikazi vise</button>
                <hr className="leftBarLine"/>
                <ui className="leftBarFriendsList">
                    <li className="leftBarFriend">
                        <img src="/assets/profilePictures/2.jpg" alt="" className="leftBarFriendImage" />
                        <span className="leftBarFriendName">Marko Markovic</span>
                    </li>
                    <li className="leftBarFriend">
                        <img src="/assets/profilePictures/3.jpg" alt="" className="leftBarFriendImage" />
                        <span className="leftBarFriendName">Ana Anic</span>
                    </li>
                    <li className="leftBarFriend">
                        <img src="/assets/profilePictures/4.jpeg" alt="" className="leftBarFriendImage" />
                        <span className="leftBarFriendName">Lena Markovic</span>
                    </li>
                    <li className="leftBarFriend">
                        <img src="/assets/profilePictures/5.jpg" alt="" className="leftBarFriendImage" />
                        <span className="leftBarFriendName">Marija Vojvodic</span>
                    </li>
                    <li className="leftBarFriend">
                        <img src="/assets/profilePictures/6.jpg" alt="" className="leftBarFriendImage" />
                        <span className="leftBarFriendName">Vanja Aleksic</span>
                    </li>
                    <li className="leftBarFriend">
                        <img src="/assets/profilePictures/7.jpg" alt="" className="leftBarFriendImage" />
                        <span className="leftBarFriendName">Maja Vukovljak</span>
                    </li>
                    <li className="leftBarFriend">
                        <img src="/assets/profilePictures/8.jpeg" alt="" className="leftBarFriendImage" />
                        <span className="leftBarFriendName">Aleksa Aleksic</span>
                    </li>
                    <li className="leftBarFriend">
                        <img src="/assets/profilePictures/9.jpg" alt="" className="leftBarFriendImage" />
                        <span className="leftBarFriendName">Vukasin Nikolic</span>
                    </li>
                    <li className="leftBarFriend">
                        <img src="/assets/profilePictures/10.jpg" alt="" className="leftBarFriendImage" />
                        <span className="leftBarFriendName">Djordje Petrovic</span>
                    </li>
                </ui>
            </div>
        </div>
    )
}