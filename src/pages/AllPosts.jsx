import { Container, PostCard } from "../components/index";
import appwriteService from "../appwrite/config";
import { useEffect, useState } from "react";

export default function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteService
      .getPosts()
      .then((posts) => {
        if (posts) {setPosts(posts.rows);}
        // console.log("posts: ", posts);
        
      })
      .catch((error) => console.log("error in AllPosts: ", error));
  }, []);

  return (
    <div>
      <Container>
        <div className="flex flex-wrap w-full gap-4 items-center justify-around">
          {posts.map((post) => (
              <div key={post.$id}>
                <PostCard post={{...post}} />
              </div>
            ))}
        </div>
      </Container>
    </div>
  );
}
