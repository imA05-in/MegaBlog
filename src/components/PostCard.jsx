import { useSelector } from "react-redux";
import appwriteService from "../appwrite/config"
import {Link} from "react-router-dom"
import authService, {} from "../appwrite/auth"
import { useState } from "react";

export default function PostCard({ post }) { 
  return (
    <Link to={`/post/${post.$id}`}>
      <div className="max-w-sm bg-black rounded-xl p-4 h-100 flex flex-col justify-between">
        <div className="justify-center mb-4 rounded-xl max-h-80 max-w-sm">
          <img
          className="max-h-75"
            src={appwriteService.getFilePreview(post.featuredImage)}
            alt={post.title}
          />
        </div>
        <div>

        <div>
          {`@${post.name}`}
        </div>

        <h2 className="text-2xl font-bold">
          {post.title}
        </h2>
        </div>
      </div>
    </Link>
  );
}