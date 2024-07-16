import Eyecatch from "@/components/eyecatch";
import Layout from "@/components/layout";
import Pagenation from "@/components/pagenation";
import PostCategory from "@/components/post-category";
import PostHeader from "@/components/post-header";
import TwoColumnLayout from "@/components/two-colum-layout";
import { Post } from "@/types/blog";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const DetailPage = () => {
    const [post, setPost] = useState<Post>();
    const [blogId, setBlogId] = useState<string>("");
    const router = useRouter();

    useEffect(() => {
        const slug = router.query.slug;
        if (typeof slug === "string") {
            setBlogId(slug);
        }
    }, [router.query]);

    useEffect(() => {
        if (blogId === "") {
            return;
        }
        setPost({
            slug: "0001",
            title: "記事のタイトル",
            eyecatch: "/images/eyecatch.jpg",
            body: "本文",
            created_at: 1719834510,
        });
    }, [blogId]);

    return (
        <Layout>
            <div className="flex flex-col items-center">
                {post && <PostHeader post={post} />}
            </div>
            <Eyecatch src="/images/about.jpg" width={568} height={288} />
            <TwoColumnLayout>
                <div className="flex flex-col flex-1 text-base leading-8">
                    {post && post.body}</div>
                <PostCategory />
            </TwoColumnLayout>
            <Pagenation
                prevText="前の記事へ" prevUrl="/blog/0001"
                nextText="次の記事へ" nextvUrl="/blog/ooo3" />
        </Layout>
    );
};

export default DetailPage;
