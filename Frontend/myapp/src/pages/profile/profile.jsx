import "./profile.css"
import Topbar from "../../components/topbar/topbar"
import Leftbar from "../../components/leftbar/leftbar"
import Rightbar from "../../components/rightbar/rightbar"
import Feed from "../../components/feed/feed"
export default function Profile() {
    return (
        <>
            <Topbar />
            <div className="profilePage">
                {/* profile page */}
                <Leftbar />
                <div className="profilePageRight">
                    <div className="profilePageRightTop">
                        <div className="profileDesign">
                            <img src="/assets/posts/12.jpg" alt="" className="profilePageCoverPhoto" />
                            <img src="/assets/profilePictures/1.jpg" alt="" className="profilePageProfilePhoto" />
                        </div>
                        <div className="profileInformation">
                            <h4 className="profileInformationName">Nikola Simic</h4>
                            <span className="profileInfoDescription">Zdravo svima!</span>
                        </div>
                    </div>
                    <div className="profilePageRightBottom">
                        <Feed />
                        {/* izmena za profile page u rightbar-u slanjem parametra profile*/}
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
        </>
    )
}