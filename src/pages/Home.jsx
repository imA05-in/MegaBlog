import { useState, useEffect } from "react";
import appwriteService from "../appwrite/config";
// import { Container, PostCard } from "../components";
import  Container  from "../components/container/Container";
import PostCard from "../components/PostCard"

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.rows);
      }
    });
  }, []);

  if(posts.length === 0){
    return (<div>
        <Container>
            <h1>Login to read posts</h1>
        </Container>
    </div>)
  }
  return(
    <div className="py-8">
        <Container>
            <div className="flex gap-6 justify-evenly items-center flex-wrap">
                {
                    posts.map((post)=>{
                        return(
                            <div key={post.$id}>
                                <PostCard post = {{...post}}/>
                            </div>
                        )
                    })
                }
            </div>
        </Container>
    </div>
  )

}
