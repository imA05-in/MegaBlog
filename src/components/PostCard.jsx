import appwriteService from "../appwrite/config"
import {Link} from "react-router-dom"

export default function PostCard({$id, title, featuredImage,...props}){
  return(
    <Link to={`/posts/${$id}`}>
      <div className="max-w-sm bg-gray-100 rounded-xl p-4">
        <div className="justify-center mb-4 rounded-xl">
          <img 
            src={appwriteService.getFilePreview(featuredImage).toString()} 
            alt={title}
            className="w-full rounded-xl"
          />
        </div>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
    </Link>
  )
}