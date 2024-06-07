import { Home, PencilLine, UserCog } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import clsx from 'clsx';
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='py-2 flex justify-between container gap-1 fixed bottom-0 left-0 right-0 bg-background max-w-lg m-auto border-t border-accent'>
            <Link href="/" className={clsx(buttonVariants({
                variant: 'ghost'
            }),
            "flex-1")}>
                <Home size={32}/>
            </Link>
            <Link href="/" className={clsx(buttonVariants({
                variant: 'ghost'
            }),
            "flex-1")}>
                <PencilLine size={32}/>
            </Link>
            <Link href="/" className={clsx(buttonVariants({
                variant: 'ghost'
            }),
            "flex-1")}>
                <UserCog size={32}/>
            </Link>
            

        </div>
    )
}

export default Footer;
