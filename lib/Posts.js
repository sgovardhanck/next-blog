import React from "react";
import { readFile, readdir } from "fs/promises";
import { marked } from "marked";
import matter from "gray-matter";

export async function getPosts(slug) {
  const source = await readFile(`content/posts/${slug}.md`, "utf8");
  const {
    content,
    data: { title },
  } = matter(source);
  const body = marked(content);
  return { title, body };
}

export async function getAllPosts() {
  const slugs = await getSlugs();
  console.log(slugs);
  const posts = [];
  for (const slug of slugs) {
    const post = await getPosts(slug);
    posts.push({ slug, ...post });
  }
  return posts;
}
export async function getSlugs() {
  const paths = await readdir("content/posts");

  return paths
    .filter((path) => path.endsWith(".md"))
    .map((path) => path.slice(0, -3));
}
