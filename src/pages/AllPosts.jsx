import { Container, PostCard } from "../components/index";
import appwriteService from "../appwrite/config";
import { useState } from "react";

export default function AllPosts() {
  const [posts, setPosts] = useState([]);
  appwriteService
    .getPosts([])
    .then((posts) => {
      if (posts) setPosts(posts.rows);
    })
    .catch(setPosts("error"));

  return (
    <div>
      <Container>
        <div className="flex flex-wrap">
            {posts.map((post) => (
          <div key={post.$id}>
            <PostCard post={post}/>
          </div>
        ))}
        </div>
      </Container>
    </div>
  );
}
