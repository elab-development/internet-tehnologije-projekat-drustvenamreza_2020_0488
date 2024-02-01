import "./post.css"
import{MoreVert} from "@mui/icons-material"
import { Users } from "../../data"
import { useState } from "react"

export default function Post({post}){
    // pocetne vrednosti su broj reakcija iz data components i false(korisnik nije odreagovao)
    const [like,setLike]=useState(post.reactions)
    const [isLiked,setIsLiked]=useState(false)
    const likeFunc=()=>{
        // ako nismo odreagovali klikom povecavamo broj like-ova
        //u suprotnom smanjujemo
        setLike(isLiked ? like-1 : like+1);
        //promena statusa isLiked svakim klikom na suprotan status 
        setIsLiked(!isLiked)
    }
    return (
        <div className="post">
            <div className="postWrapp">
                <div className="postTop">
                    <div className="postTopLeft">
                        {/* filter metoda da bismo mogli da pristupimo useru preko spoljnog kljuca u posts */}
                        <img src={Users.filter(u=>u.id===post.userID)[0].profilePicture} alt="" className="postProfilePicture"/>
                        <span className="postUsername">{Users.filter(u=>u.id===post.userID)[0].username}</span>
                        <span className="postTime">{post.time}</span>
                    </div>
                    <div className="postTopRight">
                    <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText"> {post?.photoDescription} </span>
                    <img src={post.postPhoto} alt="" className="postImage"/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/hearth.png" alt="" className="reactionIcon" onClick={likeFunc} />
                        <img src="/assets/like.png" alt="" className="reactionIcon" onClick={likeFunc} />
                        <span className="likePostCounter">{like} reakcije</span>
                    </div>
                    <div className="postBottomRight">
                    <span className="commentPostCounter">{post.comments} komentara</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
