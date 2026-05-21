import { useState, useEffect } from "react"
import {Container, postForm} from "../components/index"
import appwriteService from "../appwrite/config"
import { useNavigate, useParams } from "react-router-dom"


export default function EditPost(){

    const navigate = useNavigate()
    const [posts, setPosts] = useState([])
    const {slug} = useParams()

    useEffect(()=>{
        if(slug){
            appwriteService.getPost()
            .then((post)=>{
                if(post) setPosts(post)
            })
        }else{
            navigate('/')
        }
    },[slug, navigate])

    return posts ? <div className="py-8">
<Container>
    <postForm post={posts}/>
</Container>
    </div>: null
}