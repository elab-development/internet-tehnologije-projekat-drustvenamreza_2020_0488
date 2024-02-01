import "./post.css"
import{MoreVert} from "@mui/icons-material"
import { Users } from "../../data"

export default function Post({post}){
    return (
        <div className="post">
            <div className="postWrapp">
                <div className="postTop">
                    <div className="postTopLeft">
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
                        <img src="/assets/hearth.png" alt="" className="reactionIcon"/>
                        <img src="/assets/like.png" alt="" className="reactionIcon"/>
                        <span className="likePostCounter">{post.reactions}</span>
                    </div>
                    <div className="postBottomRight">
                    <span className="commentPostCounter">{post.comments}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
