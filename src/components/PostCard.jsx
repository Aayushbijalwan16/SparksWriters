import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      {/* <div className='w-full bg-white rounded-xl p-4 flex flex-col flex-wrap align-center border border-black gap-4'>
            <div>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl w-full justify-center mb-4 p-1rem'/>

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div> */}
      <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
        <img
          src={appwriteService.getFilePreview(featuredImage)}
          alt={title}
          class="absolute inset-0 h-full w-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
        <h3 class="z-10 mt-3 text-3xl font-bold text-white">{title}</h3>
      </article>
    </Link>
  );
}

export default PostCard;
