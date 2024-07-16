export type Post = {
    slug: string;
    title: string;
    body: string;
    eyecatch: string;
    created_at: number;
};

export type Category = {
    id: number;
    name: string;
};