import React from "react";
import { getPosts, getSlugs } from "../../lib/Posts";
import Head from "next/head";

export async function getStaticPaths() {
  const slugs = await getSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const posts = await getPosts(slug);
  return {
    props: {
      posts,
    },
  };
}

export default function Posts({ posts }) {
  return (
    <div>
      <Head>
        <title>{posts.slug}</title>
      </Head>
      <h1>This is the First-post page</h1>
      <article dangerouslySetInnerHTML={{ __html: posts.body }} />
    </div>
  );
}
