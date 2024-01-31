import "./topbar.css"//./ jer smo u istom folderu
import { Search, Person, Chat, Notifications } from "@mui/icons-material"// Search ikonica 
export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarLeft">
                <span className="logo">Free speech</span>
            </div>
            <div className="topbarCenter">
                <div className="searchBar">
                    <Search className="searchIcon" />
                    <input placeholder="Pretrazite prijatelje, postove ili video" className="searchInput"/>
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Pocetna</span>
                    <span className="topbarLink">Objavljeno</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconNumber">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconNumber">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconNumber">1</span>
                    </div>
                </div>
                <img src="/assets/profilePictures/1.jpg" alt="" className="profilePicture" />
            </div>
        </div>
    );
}