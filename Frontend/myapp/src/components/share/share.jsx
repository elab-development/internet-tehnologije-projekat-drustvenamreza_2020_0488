import "./share.css"
import {PermMedia, Label, Room, EmojiEmotions} from "@mui/icons-material"
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
                            <PermMedia htmlColor="Red" className="shareOptionIcon"/>
                            <span className="shareOptionText">Slika/Video</span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor="DodgerBlue" className="shareOptionIcon"/>
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="MediumSeaGreen" className="shareOptionIcon"/>
                            <span className="shareOptionText">Lokacija</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="Goldenrod" className="shareOptionIcon"/>
                            <span className="shareOptionText">Emoji</span>
                        </div>
                    </div>
                    <button className="shareButton">Podeli</button>
                </div>
            </div>
        </div >
    )

}