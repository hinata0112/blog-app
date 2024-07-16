import Link from "next/link";
import { FC } from "react";
import {
    ChevronLeft,
    ChevronRight,
    Divide
} from 'lucide-react'

type Props = {
    prevText?: string;
    prevUrl?: string;
    nextText?: string
    nextvUrl?: string
}

const Pagenation: FC<Props> = ({ prevText, prevUrl, nextText, nextvUrl }) => {
    return (
        <div className="flex justify-center items-center py-16">
            <ul className="container flex flex-row justify-between items-center gap-2 max-w-5xl px-4">
                {prevText && prevUrl ? (
                    <li>
                        <Link href={prevUrl} className="flex flex-row justify-center items-center gap-2">
                            <ChevronLeft size={16} />
                            <span>{prevText}</span>
                        </Link>
                    </li>
                ) : (<div></div>)}
                {nextText && nextvUrl ? (
                    <li>
                        <Link href={nextvUrl} className="flex flex-row justify-center items-center gap-2">
                            <span>{nextText}</span>
                            <ChevronRight size={16} />
                        </Link>
                    </li>
                ) : (<div></div>)}
            </ul>
        </div>
    );
}

export default Pagenation;