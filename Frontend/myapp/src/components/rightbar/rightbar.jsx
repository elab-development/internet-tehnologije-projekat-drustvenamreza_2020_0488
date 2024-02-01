import OnlineFriends from "../onlineFriends/onlineFriends"
import "./rightbar.css"
import { Users } from "../../data"

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
                   {Users.map(u=>(
                    <OnlineFriends key={u.id} user={u}/>
                   ))}
                </ui>
            </div>
        </div>
    )
}