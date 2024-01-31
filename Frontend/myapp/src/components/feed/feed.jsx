import "./feed.css"
import Share from "../share/share"
import Post from "../posts/post"
export default function Feed(){
    return(
        <div className="feed">
            <div className="feedWrapp">
                <Share/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}