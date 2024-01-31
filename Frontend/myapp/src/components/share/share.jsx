import "./share.css"
import {PermMedia} from "@mui/icons-material"
export default function Share() {
    return (
        <div className="share">
            <div className="shareWrapp">
                <div className="shareTop">
                    <img src="/assets/profilePictures/1.jpg" alt="" className="shareProfilePicture" />
                    <input placeholder="Napisite o cemu razmisljate.." className="sharePostInputText" />
                </div>
                <hr className="shareLine"/>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia className="shareOptionIcon"/>
                            <span className="shareOptionText">Slika/Video</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )

}