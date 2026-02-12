"use client"

import { usePathname } from "next/navigation";

export default function Footer(){
    const pathname = usePathname()
    return(
        <div>
            {pathname && !pathname.includes('/reader') && (
            <footer className=" text-sm text-zinc-500 dark:text-zinc-400 px-4 text-center mb-3 mt-5">
                © {new Date().getFullYear()} UbuntuLibrary. All rights reserved.
            </footer>
            )}
        </div>
    )
}