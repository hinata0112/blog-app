import { Github, Facebook, X } from 'lucide-react';
import Link from 'next/link';


const Social = () => {
    return (
        <ul className='flex flex-row justify-center items-center gap-x-6'>
            <li>
                <Link href={'https://x.com/home?lang=ja'} />
                <X size={24}></X>
                <span className='sr-only'>X</span>
            </li>
            <li>
                <Link href={'https://www.facebook.com/?locale=ja'} />
                <Facebook size={24}></Facebook>
                <span className='sr-only'>Facebook</span>
            </li>
            <li>
                <Link href={'https://github.com'} />
                <Github size={24}></Github>
                <span className='sr-only'>Github</span>
            </li>
        </ul>
    );
}

export default Social;