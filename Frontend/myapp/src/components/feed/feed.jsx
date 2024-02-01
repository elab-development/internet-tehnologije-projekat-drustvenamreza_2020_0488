import "./feed.css"
import Share from "../share/share"
import Post from "../posts/post"
import { Posts } from "../../data"
export default function Feed() {
    return (
        <div className="feed">
            <div className="feedWrapp">
                <Share />
                {Posts.map((p) => (
                    <Post key={p.id} post={p}/>
                ))}
            </div>
        </div>
    )
}