import React from 'react';
import moment from 'moment';
import Link from 'next/link';

const FeaturedPostCard = ({ post }) => (
  <div className="bg-white shadow-lg rounded-2xl  pl-3 pt-3 pr-3  pb-1 mb-8">
    <Link href={`/post/${post.slug}`}><span className="cursor-pointer absolute w-full h-full" /></Link>

    <div className="relative h-40 overflow-hidden pb-20 mb-6">

      <div className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-70" />
      <div className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-40" style={{ backgroundImage: `url('${post.featuredImage.url}')` }} />
      <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-10 from-gray-400 via-gray-700 to-black w-full h-40" />
      <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
      </div>
      <Link href={`/post/${post.slug}`}><span className="cursor-pointer absolute w-full h-full" /></Link>
      <span className="text-gray-400 mb-4  font-medium text-small text-center">{post.title}</span>
    </div>
    <span className="text-gray-900 mb-4  font-medium text-xs  text-center">{post.title}</span>
    <p className="text-gray-300 mb-4  font-light text-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>

  </div>

);

export default FeaturedPostCard;
