import Link from "next/link";
import { FC } from "react";
type Progs = {
    isBoxStyle?: boolean
}

const Logo: FC<Progs> = ({ isBoxStyle }) => {
    return (
        <>
            {isBoxStyle ? (
                <Link href={"/"} className="bg-stone-700 text-white font-bold text-2xl py-4 px-4 inline-block">CUBE</Link >

            ) : (
                <Link href={"/"} className="text-black font-bold text-2xl py-4 px-8 inline-block" > CUBE</Link >
            )}
        </>
    );
}

export default Logo;