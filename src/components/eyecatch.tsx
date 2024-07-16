import Image from "next/image";
import { FC } from "react";

type Props = {
    src: string;
    alt?: string;
    width: number;
    height: number;
};


const Eyecatch: FC<Props> = ({ src, alt = "", width, height }) => {
    return (
        <div className="flex justify-center items-center">
            <div className="container flex flex-col lg:flex-row justify-center lg:justify-between gap-8 max-w-5xl px-8 md:px-0">
                <figure className="w-full">
                    <Image src={src} alt={alt} width={width} height={height} className="w-full" />
                </figure>
            </div>
        </div>
    );
};

export default Eyecatch;