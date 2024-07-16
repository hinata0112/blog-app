import Hero from "@/components/hero";
import Layout from "@/components/layout";
import Pagenation from "@/components/pagenation";
import Posts from "@/components/posts";
import { Post } from "@/types/blog";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const data: Post[] = [
  {
    slug: "0001",
    title: "記事のタイトル",
    eyecatch: "/images/eyecatch.jpg",
    body: "本文",
    created_at: 1719834510,
  },
  {
    slug: "0002",
    title: "記事のタイトル",
    eyecatch: "/images/eyecatch.jpg",
    body: "本文",
    created_at: 1719834510,

  },
  {
    slug: "0003",
    title: "記事のタイトル",
    eyecatch: "/images/eyecatch.jpg",
    body: "本文",
    created_at: 1719834510,
  },
  {
    slug: "0004",
    title: "記事のタイトル",
    eyecatch: "/images/eyecatch.jpg",
    body: "本文",
    created_at: 1719834510,

  },
];

export default function Home() {
  return (
    <Layout>
      <Hero title="CUBE" subtitle="アウトプットしていくサイト" isImage />
      <Posts posts={data} />
      <Pagenation nextvUrl="/blog" nextText="次の記事へ" />
    </Layout>
  );
}