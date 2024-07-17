import Eyecatch from "@/components/eyecatch";
import Layout from "@/components/layout";
import Pagenation from "@/components/pagenation";
import PostCategory from "@/components/post-category";
import PostHeader from "@/components/post-header";
import TwoColumnLayout from "@/components/two-colum-layout";
import { Post } from "@/types/blog";
import { selectPost } from "@/utils/supabase";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ClassAttributes, HTMLAttributes } from "react";
import ReactMarkdown, { ExtraProps } from "react-markdown";
import remarkGfm from "remark-gfm";

type HeadingProps = ClassAttributes<HTMLHeadingElement> &
    HTMLAttributes<HTMLHeadingElement> &
    ExtraProps;

const H1 = ({ children }: HeadingProps) => {
    return <h1 className="text-blue-500 text-5xl">{children}</h1>;
};


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
        const fetchPost = async () => {

            const data = await selectPost(blogId);
            if (!data) {
                return;
            }
            setPost(data);
        };
        fetchPost();
    }, [blogId]);

    return (
        <Layout>
            <article className="flex flex-col items-center">{post && <PostHeader post={post} />}</article>

            {post ? (
                <Eyecatch
                    src={`https://puvgtufvrywnimyrntkc.supabase.co/storage/v1/object/public/public-image-bucket/${post.eyecatch}`}
                    width={568}
                    height={288}
                />
            ) : (
                <Eyecatch src="/images/eyecatch.jpg" width={568} height={288} />
            )}

            <TwoColumnLayout>
                <div className="flex flex-col flex-1 text-base leading-8">
                    <ReactMarkdown
                        components={{
                            h1: H1,
                        }}
                        remarkPlugins={[remarkGfm]}
                    >
                        {post && post.body}
                    </ReactMarkdown>
                </div>
                <PostCategory />
            </TwoColumnLayout>

            <Pagenation
                prevText="前の記事へ"
                prevUrl="/blog/0001"
                nextText="次の記事へ"
                nextvUrl="/blog/0003"
            />
        </Layout>
    );
};

export default DetailPage;