import "./post.css"
import{MoreVert} from "@mui/icons-material"
export default function Post(){
    return (
        <div className="post">
            <div className="postWrapp">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="/assets/profilePictures/3.jpg" alt="" className="postProfilePicture"/>
                        <span className="postUsername">Ana Anic</span>
                        <span className="postTime">15min ago</span>
                    </div>
                    <div className="postTopRight">
                    <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText"> Predivan dan danas.. </span>
                    <img src="/assets/posts/1.jpg" alt="" className="postImage"/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/hearth.png" alt="" className="reactionIcon"/>
                        <img src="/assets/like.png" alt="" className="reactionIcon"/>
                        <span className="likePostCounter">154 ljudi kaze da im se svidja</span>
                    </div>
                    <div className="postBottomRight">
                    <span className="commentPostCounter">3 komentara</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
