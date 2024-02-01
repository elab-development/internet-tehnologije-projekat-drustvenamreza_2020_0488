import OnlineFriends from "../onlineFriends/onlineFriends"
import Friends from "../friendsOnProfilePage/friendsOnProfilePage"
import "./rightbar.css"
import { Users } from "../../data"

export default function Rightbar({ profile }) {

    // verzija rightbara za homepage
    const HomeRightBar = () => {
        return (
            <>
                <div className="birthdayNotification">
                    <img src="/assets/gift3.png" alt="" className="birthdayImage" />
                    <span className="birthdayText">
                        <b>+2 ljudi</b> je rodjeno istog dana
                    </span>
                </div>
                <img src="/assets/ad.png" alt="" className="AdImage" />
                <h4 className="rightbarTitle">Online prijatelji</h4>
                <ui className="rightbarOnlineFriendList">
                    {/* prolazimo kroz sve usere i vracamo svakog kao parametar za pozvanu metodu */}
                    {Users.map(u => (
                        <OnlineFriends key={u.id} user={u} />
                    ))}
                </ui>
            </>
        )
    }
    // verzija rightbara za profilepage
    const ProfileRightBar = () => {
        return (
            <>
                <h4 className="rightbarProfileInfoTitle">Informacije o korisniku</h4>
                <div className="rightbarInformation">
                    <div className="rightbarInformationItem">
                        <span className="rightbarInformationItemTitle">Grad:</span>
                        <span className="rightbarInformationItemName">Beograd</span>
                    </div>
                    <div className="rightbarInformationItem">
                        <span className="rightbarInformationItemTitle">Zemlja:</span>
                        <span className="rightbarInformationItemName">Srbija</span>
                    </div>
                    <div className="rightbarInformationItem">
                        <span className="rightbarInformationItemTitle">Ljubavni status:</span>
                        <span className="rightbarInformationItemName">U vezi</span>
                    </div>
                </div>
                <h4 className="rightbarProfileFriendTitle">Prijatelji:</h4>
                <ui className="rightbarFriends">
                   {/* prolazimo kroz sve usere i vracamo svakog kao parametar za pozvanu metodu */}
                   {Users.map(u => (
                        <Friends key={u.id} user={u} />
                    ))}
                </ui>
                <img src="/assets/ad.png" alt="" className="AdImage" />
            </>
        )
    }
    return (
        <div className="rightBar">
            <div className="rightbarWrapp">
                {/* <ProfileRightBar /> */}
                <HomeRightBar />
            </div>
        </div>
    )
}