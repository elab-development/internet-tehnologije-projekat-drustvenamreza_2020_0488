import "./topbar.css"//./ jer smo u istom folderu
import { Search, Person, Chat, Notifications } from "@mui/icons-material"// Search ikonica 
import { Link } from "react-router-dom"
export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarLeft">
                {/* klikom vraca na home stranicu */}
                <Link to="/" style={{ textDecoration: 0 }}>
                    <span className="logo">Free speech</span>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchBar">
                    <Search className="searchIcon" />
                    <input placeholder="Pretrazite prijatelje, postove ili video" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <Link to="/" style={{ textDecoration: 0 }}>
                        <span className="topbarLink">Pocetna</span>
                    </Link>
                    <Link to="/profile" style={{ textDecoration: 0 }}>
                        <span className="topbarLink">Objavljeno</span>
                    </Link>
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
                <Link to="/profile" style={{ textDecoration: 0 }}>
                    <img src="/assets/profilePictures/1.jpg" alt="" className="profilePicture" />
                </Link>
            </div>
        </div >
    );
}