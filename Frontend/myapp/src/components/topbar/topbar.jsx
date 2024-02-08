import "./topbar.css"//./ jer smo u istom folderu
import { Search, Person, Chat, Notifications } from "@mui/icons-material"// Search ikonica 
import { useContext } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";
export default function Topbar() {

    const {user} = useContext(AuthContext)
    const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

    const handleClick = (e) =>{
        e.preventDefault()
        // loginCall({email:email.current.value, password:password.current.value}, dispatch)
        console.log("kliknuto")
        sessionStorage.removeItem("sessionData");
        window.location.reload();
    }

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
                        <span className="topbarLink" onClick={handleClick}>Logout</span>
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
                <Link to={`/profile/${user.username}`} style={{ textDecoration: 0 }}>
                    <img src={user.profilePicture ? PublicFolder+user.profilePicture : PublicFolder+"noAvatar.png"} alt="" className="profilePicture" />
                </Link>
            </div>
        </div >
    );
}