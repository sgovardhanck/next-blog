import Link from "next/link";
import React from "react";
import { getAllPosts } from "../lib/Posts";
import Head from "next/head";

export async function getStaticProps() {
  const posts = await getAllPosts();
  return {
    props: { posts },
  };
}
export default function index({ posts }) {
  console.log(posts);
  return (
    <>
      <Head>
        <title>{posts.title}</title>
      </Head>
      <ul>
        {posts.map((post) => (
          <li>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
