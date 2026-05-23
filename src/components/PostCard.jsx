import appwriteService from "../appwrite/config"
import {Link} from "react-router-dom"

export default function PostCard({ post }) {
  return (
    <Link to={`/post/${post.$id}`}>
      <div className="max-w-sm bg-black rounded-xl p-4">
        <div className="justify-center mb-4 rounded-xl">
          <img
            src={appwriteService.getFilePreview(post.featuredImage)}
            alt={post.title}
          />
        </div>

        <h2 className="text-2xl font-bold">
          {post.title}
        </h2>
      </div>
    </Link>
  );
}