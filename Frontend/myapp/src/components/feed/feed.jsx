import "./feed.css"
import Share from "../share/share"
import Post from "../posts/post"
import { useEffect, useState } from "react"
import axios from "axios"

export default function Feed() {

    const [posts, setPosts] = useState([])

    useEffect(()=>{
        const fetchPosts = async () => {
            const res = await axios.get("/timeline/65b98a3769a130cc5257e09b")
            setPosts(res.data)
        }
        
        fetchPosts()
    }, []) //renderuje samo jednom feed zbog []
    return (
        <div className="feed">
            <div className="feedWrapp">
                <Share />
                {posts.map((p) => (
                    <Post key={p._id} post={p}/>
                ))}
            </div>
        </div>
    )
}