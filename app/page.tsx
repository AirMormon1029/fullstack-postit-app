'use client';
import axios from 'axios';
import AddPost from './components/AddPost';
import { useQuery } from '@tanstack/react-query';
import Post from './components/Posts';
import { ReactNode, useState } from 'react';
import { PostType } from './types/Posts';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

const allPosts = async () => {
  const response = await axios.get('/api/posts/getPosts');
  return response.data;
};

export default function Home() {
  const { data, error, isLoading } = useQuery<PostType[]>({
    queryFn: allPosts,
    queryKey: ['posts'],
  });
  if (error) return error;
  if (isLoading) return 'Loading...';

  return (
    <main>
      <AddPost />
      {data?.map((post) => (
        <Post
          comments={post.Comment}
          key={post.id}
          name={post.user.name}
          avatar={post.user.image}
          postTitle={post.title}
          id={post.id}
        />
      ))}
    </main>
  );
}
