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
// 型定義はタグ(ロール)ごとに型定義する必要がある
type HeadingProps = ClassAttributes<HTMLHeadingElement> &
    HTMLAttributes<HTMLHeadingElement> &
    ExtraProps;
// h1タグのスタイル定義
const H1 = ({ children }: HeadingProps) => {
    return <h1 className="text-blue-500 text-5xl">{children}</h1>;
};
// ↑↑追加↑↑

const DetailPage = () => {
    const [post, setPost] = useState<Post>();
    const [blogId, setBlogId] = useState<string>("");
    const router = useRouter();

    useEffect(() => {
        // クエリパラメータを取得する
        const slug = router.query.slug;
        // console.log(slug, typeof slug, typeof slug === "string");
        // クエリパラメーターにslugが存在する時にblogIdの状態を更新する
        if (typeof slug === "string") {
            setBlogId(slug);
        }
    }, [router.query]);

    useEffect(() => {
        // blogIdが空白の時には何もしない
        if (blogId === "") {
            return;
        }
        const fetchPost = async () => {
            // 記事データを取得する
            const data = await selectPost(blogId);
            // 記事データが取得できない時は処理を終了する
            if (!data) {
                return;
            }
            // blogIdが存在する時にはpostの状態を更新する
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
                {/* <div className="flex flex-col flex-1 text-base leading-8">{post && post.body}</div> */}
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
                {/* ↑↑修正↑↑ */}
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