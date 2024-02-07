import "./feed.css"
import Share from "../share/share"
import Post from "../posts/post"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { AuthContext } from "../../context/AuthContext"

export default function Feed({username}) {

    const [posts, setPosts] = useState([])
    const {user} = useContext(AuthContext)

    useEffect(()=>{
        const fetchPosts = async () => {
            const res = username ? await axios.get("/timeline/profile/" + username) : await axios.get("/timeline/" + user._id)
            setPosts(res.data)
        }
        
        fetchPosts()
    }, [username, user._id]) //renderuje samo jednom feed zbog []
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