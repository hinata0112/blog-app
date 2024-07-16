import { FolderOpen } from "lucide-react";

const PostCategory = () => {
    return (
        <div className="flex flex-col py-4 gap-4 w-full lg:w-60  items-start lg:items-end">
            <FolderOpen size={16}></FolderOpen>
            <div>カテゴリ１</div>
            <div>カテゴリ２</div>
        </div>
    );
}

export default PostCategory;